import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/products/products.service';

import { ToolsService } from '../../services/tools.service';

@Component({
   selector: 'cart',
   templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {
   public productsFromCart = [];
   public totalPrice = 0;
   constructor(private productService: ProductService,
      private toolsService: ToolsService) {

   }

   public ngOnInit() {
      this.productService.getFromCart().then(
         (products) => {
            this.productsFromCart = products;
            if (products && products.length) {
               let i = 0;
               let length = this.productsFromCart.length;
               for (i = 0; i < length; i++) {
                  this.totalPrice += Number(this.productsFromCart[i].price);
               }
            }
         }
      );
   }

   public removeFromCart(product) {
      this.totalPrice -= Number(product.price);
      let i = 0;
      let length = this.productsFromCart.length;
      for (i = 0; i < length; i++) {
         if (this.toolsService.getUniqueIdForCart(this.productsFromCart[i]) == this.toolsService.getUniqueIdForCart(product)) {
            this.productsFromCart.splice(i, 1);
            this.productService.updateCart(this.productsFromCart);
            break;
         }
      }
   }

}