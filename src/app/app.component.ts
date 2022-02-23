import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './products/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skills';
  quantity:number=0;
  @ViewChild(ProductComponent)
  product: ProductComponent = new ProductComponent;

  ngAfterViewInit(){
    this.product.childMethod();
    this.quantity=this.product.inStock;
    console.log(this.quantity);
  }
  
}
