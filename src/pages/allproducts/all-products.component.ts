import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductService } from '../../services/products/products.service';

import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ToolsService } from '../../services/tools.service';

@Component({
   selector: 'all-priducts',
   templateUrl: 'all-products.component.html'
})
export class AllProductsComponent implements OnInit {
   public allProducts = [];
   public addedToCardIds = {};
   public category = undefined;
   constructor(private productService: ProductService,
      private toolsService: ToolsService,
      private navParams: NavParams, private navController: NavController) {

      this.category = navParams.get('category');
      // console.log('AllProductsComponent this.category: ', this.category);
   }

   public ngOnInit() {
      this.productService.getFromCart().then(
         (products) => {
            this.addedToCardIds = this.toolsService.getIdsAddedToCard(products);
            // console.log('this.addedToCardIds: ', this.addedToCardIds);


            //TODO: need to create it generic
            if (!this.category) {
               this.allProducts = this.productService.getAllProducts()
            } else if (this.category === 'Furniture') {
               this.allProducts = this.productService.getFurniture()
            } else if (this.category === 'Electronics') {
               this.allProducts = this.productService.getElectronics()
            }
         }
      );
   }

   public addToCart($event, product) {
      $event.stopPropagation();
      this.addedToCardIds[this.toolsService.getUniqueIdForCart(product)] = true;
      this.productService.addToCart(product);
   }
   public clear() {
      this.productService.clearCart();
      this.addedToCardIds = {};
   }

   public viewDetails(product) {
      this.navController.push(ProductDetailsComponent, { product: product })
   }
}