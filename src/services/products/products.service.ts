import { Injectable } from '@angular/core';

import { CartService } from '../cart/cart.service';

import { PRODUCT_TYPES, FURTINURE_LIST, ELECTRONICS_LIST } from './products';

import { ToolsService } from '../tools.service';

@Injectable()
export class ProductService {
   private electronics = ELECTRONICS_LIST;
   private furniture = FURTINURE_LIST;

   constructor(private cartService: CartService,
      private toolsService: ToolsService) {

   }

   public getAllCategories() {
      return PRODUCT_TYPES;
   }

   public getElectronics() {
      return this.electronics.slice();
   }
   public getFurniture() {
      return this.furniture.slice();
   }

   public getAllProducts() {
      return [...this.electronics.slice(), ...this.furniture.slice()]
   }

   public addToCart(product) {
      this.toolsService.setUniqueIdForCart(product);
      this.getFromCart().then(
         (products) => {
            products = products || [];
            products.push(product);
            this.cartService.addToCart(products);
         }
      );
   }

   public updateCart(products) {
      products = products || [];
      this.cartService.addToCart(products);
   }

   public getFromCart() {
      return this.cartService.getCart().then(
         (products) => {
            products = products || [];
            return products;
         }
      );
   }

   public clearCart() {
      this.cartService.clearCart();
   }
}