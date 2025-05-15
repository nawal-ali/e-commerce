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

