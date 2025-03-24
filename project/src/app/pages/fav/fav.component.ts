import { Component } from '@angular/core';

@Component({
  selector: 'app-fav',
  standalone: false,
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
  
  favItems: { name: string; price: number; image: string }[] = [
    { name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' }
  ];


  removeFromFav(index: number): void {
    this.favItems.splice(index, 1);
  }


  addToFav(item: { name: string; price: number; image: string }): void {
    this.favItems.push(item);
  }
}

