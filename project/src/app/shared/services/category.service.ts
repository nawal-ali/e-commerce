import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type OptionGroup = {
  label: string;
  options: string[];
};

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private selectedCategorySubject = new BehaviorSubject<string>(''); // No default category
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  setSelectedCategory(category: string): void {
    this.selectedCategorySubject.next(category);
  }

  getCategoryOptions(category: string): OptionGroup[] {
    return this.categoryGroups[category] || [];
  }
  public categoryGroups: { [key: string]: OptionGroup[] } = {
  
    gaming: [
      {
        label: "Brand",
        options: [
          "Sony", "Xiaomi" , "Marvo" , "Logitech" ,"DOBE"
        ]
      },
      {
        label: "Category",
        options: [
        "Gaming Accessories", "Mobility", "Consoles" ,"Controllers"
        ]
      },
      {
        label: "Connectivity",
        options: ["Wired", "Wireless"]
      },
    ],    
  
    tvs: [
      {
        label: "Brand",
        options: [
        "Haier", "Jac", "LG", "Samsung", "Xiaomi", "Sharp", "Syinix", "Armadillo"
        ]
      },      
      {
        label: "Display Size",
        options: [
          "32 inches", "43 inches", "50 inches", "55 inches", "60 inches"
        ]
      },
      {
        label: "Resolution",
        options: [
          "FHD", "Full HD", "4K UHD"
        ]
      },
      {
        label: "Display Type",
        options: [
          "LED", "OLED", "QLED"
        ]
      },
    ],
    
  

  
    bluetoothSpeaker :[
      {
        label: "Brand",
        options: ["L'AVVENTO", "Sony"]
      },
      {
        label: "Color",
        options: ["Black", "White", "Gray", "Red"]
      },
      {
        label: "Battery Time",
        options: [
          "Up to 10 Hours" ,"Up to 15 Hours", "Up to 20 Hours", "Up to 35 Hours", "Up to 50 Hours" 
        ]
      },
      {
        label: "Connectivity Type",
        options: [
          "Bluetooth 5.0", "Bluetooth 5.3"
        ]
      },
  
    ], }


}
