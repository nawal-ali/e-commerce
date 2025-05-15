import { Component } from '@angular/core';
import { WishlistService } from '../../shared/services/wishlist.service';

@Component({
  selector: 'app-fav',
  standalone: false,
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
  favItems:any[]=[]
  id = localStorage.getItem('id')
  constructor(public fav:WishlistService){
    this.fav.getFavorites(this.id).subscribe(res =>{
      this.favItems = res.data;
    })
  }
  
  // favItems: { name: string; price: number; image: string }[] = [
  //   { name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  //   { name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
  //   { name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' }
  // ];


  // removeFromFav(index: number): void {
  //   this.favItems.splice(index, 1);
  // }

  removeFromFav(index: number): void {
  const item = this.favItems[index];
  const userId = this.id;

  if (!userId || !item?.productId?._id) {
    console.error('Missing userId or productId');
    return;
  }

  this.fav.removeFromFavorites(userId, item.productId._id).subscribe(
    () => {
      this.favItems.splice(index, 1);
    },
    (error) => {
      console.error('Failed to remove from favorites:', error);
    }
  );
}



  addToFav(item: { name: string; price: number; image: string }): void {
    this.favItems.push(item);
  }
}

