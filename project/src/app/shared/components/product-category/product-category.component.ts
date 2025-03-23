import { ProductService } from './../../services/product.service';
import { CategoryService,OptionGroup } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  imports: [
    CommonModule],
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  category: string = ''; 
  activeCategoryGroups: OptionGroup[] = [];
  openStates: { [key: string]: boolean } = {};
  selectedFilters: { [key: string]: Set<string> } = {};
  minPrice: number = 0;
  maxPrice: number = 75900;
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const newCategory = params['category'];
      if (newCategory && newCategory !== this.category) {
        this.category = newCategory;
        this.updateCategory();
      }
    });

    this.ProductService.getSelectedCategory().subscribe((category) => {
      if (!this.category && category) {
        this.category = category;
        this.updateCategory();
      }
    });
  }

  private updateCategory(): void {
    this.loadProducts();
    this.loadCategoryGroups();
  }

  private loadProducts(): void {
    this.ProductService.getProducts().subscribe((data: any) => {
      const availableCategories = Object.keys(data.PRODUCTS);
      let matchingCategory = availableCategories.find(
        (cat) => cat.toLowerCase() === this.category.toLowerCase()
      );

      if (matchingCategory) {
        this.products = data.PRODUCTS[matchingCategory];

        const validPrices = this.products
          .map((p) => Number(String(p.price).replace(/,/g, '').trim()))
          .filter((price) => !isNaN(price) && price > 0);

        this.minPrice = validPrices.length > 0 ? Math.min(...validPrices) : 0;
        this.maxPrice = validPrices.length > 0 ? Math.max(...validPrices) : 100000;
      } else {
        this.products = [];
      }

      this.applyFilters();
    });
  }

  private loadCategoryGroups(): void {
    this.activeCategoryGroups = this.categoryService.getCategoryOptions(this.category);
  }

  onMinPriceChange(event: any): void {
    this.minPrice = +event.target.value;
    if (this.minPrice > this.maxPrice) {
      this.minPrice = this.maxPrice;
    }
    this.applyFilters();
  }

  onMaxPriceChange(event: any): void {
    this.maxPrice = +event.target.value;
    if (this.maxPrice < this.minPrice) {
      this.maxPrice = this.minPrice;
    }
    this.applyFilters();
  }

  onOptionChange(optionGroup: string, option: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const normalizedOption = option.toLowerCase().trim();

    if (!this.selectedFilters[optionGroup]) {
      this.selectedFilters[optionGroup] = new Set<string>();
    }

    if (input.checked) {
      this.selectedFilters[optionGroup].add(normalizedOption);
    } else {
      this.selectedFilters[optionGroup].delete(normalizedOption);
      if (this.selectedFilters[optionGroup].size === 0) {
        delete this.selectedFilters[optionGroup];
      }
    }

    this.applyFilters();
  }

  toggleFilter(label: string): void {
    this.openStates[label] = !this.openStates[label];
  }

  applyFilters(): void {
    console.log('Applying filters...');

    this.filteredProducts = this.products.filter((product) => {
      const productPrice = Number(String(product.price).replace(/,/g, '').trim());
      const priceValid = productPrice >= this.minPrice && productPrice <= this.maxPrice;

      if (Object.keys(this.selectedFilters).length === 0) {
        return priceValid;
      }

      const matchesAllFilters = Object.entries(this.selectedFilters).every(([group, options]) => {
        const propertyMap: { [key: string]: string } = {
          "Brand": "brand",
          "Color": "color",
          "Battery Time": "batteryTime",
          "Microphone": "microphone",
          "Connectivity Type": "connectivityType",
          "Noise Reduction": "noiseReduction"
        };

        const productKey = propertyMap[group];
        const productValue = product[productKey] || '';

        if (!productValue) return false;

        const productValues: string[] = Array.isArray(productValue)
          ? productValue.map((val: string) => val.toLowerCase().trim())
          : [String(productValue).toLowerCase().trim()];

        return productValues.some((value: string) => options.has(value));
      });

      return priceValid && matchesAllFilters;
    });

    console.log(`Filtered ${this.filteredProducts.length} products.`);
  }
}
