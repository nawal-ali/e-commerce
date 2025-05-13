import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-monitor',
  standalone: false,
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent {
      monitor:any;
      constructor(public productService:ProductService){
        this.productService.getMonitorCategory().subscribe(res=>{
          this.monitor = res.data;
        })
      }
}
