import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
   selector: 'all-priducts',
   templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent {
   public product = undefined;
   constructor(private navParams: NavParams) {

      this.product = navParams.get('product');
      // console.log('ProductDetailsComponent this.product: ', this.product);
   }
}