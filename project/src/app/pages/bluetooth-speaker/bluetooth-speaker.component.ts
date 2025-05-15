import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bluetooth-speaker',
  standalone: false,
  templateUrl: './bluetooth-speaker.component.html',
  styleUrl: './bluetooth-speaker.component.css'

})
export class BluetoothSpeakerComponent {
    speaker:any;
            constructor(public productService:ProductService,private spinner: NgxSpinnerService){
              this.productService.getSpeakerCategory().subscribe(res=>{
                this.spinner.show();
                this.speaker = res.data;
              },()=>{},()=>{this.spinner.hide();})
            }
}
