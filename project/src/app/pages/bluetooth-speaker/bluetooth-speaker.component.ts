import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-bluetooth-speaker',
  standalone: false,
  templateUrl: './bluetooth-speaker.component.html',
  styleUrl: './bluetooth-speaker.component.css'
})
export class BluetoothSpeakerComponent {
    speaker:any;
            constructor(public productService:ProductService){
              this.productService.getMonitorCategory().subscribe(res=>{
                this.speaker = res.data;
              })
            }
}
