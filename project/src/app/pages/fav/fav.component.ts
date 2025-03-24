import { Component } from '@angular/core';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
@Component({
  selector: 'app-fav',
  standalone: false,
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent {
  favoriteItems: Product[] = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1, image: 'path_to_image1' },
    { id: 2, name: 'Product 2', price: 31.9, quantity: 1, image: 'path_to_image1' },
    { id: 3, name: 'Product 3', price: 49.99, quantity: 1, image: 'path_to_image2' },
    { id: 4, name: 'Product 4', price: 19.99, quantity: 1, image: 'path_to_image3' },
    { id: 5, name: 'Product 5', price: 49.99, quantity: 1, image: 'path_to_image2' }
  ];


  addToFavorites(item: Product): void {
    const existingItem = this.favoriteItems.find(favItem => favItem.id === item.id);
    if (!existingItem) {
      this.favoriteItems.push({ ...item, quantity: 1 });
    }
    console.log(this.favoriteItems); 
  }

  
  removeFromFavorites(index: number): void {
    this.favoriteItems.splice(index, 1);
  }

  
  getTotalPrice(): number {
    return this.favoriteItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
