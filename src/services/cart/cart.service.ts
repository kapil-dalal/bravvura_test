import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

import { ToolsService } from '../tools.service';

const CART_KEY = 'selectedItems'
@Injectable()
export class CartService {
   constructor(private storageService: StorageService) {

   }

   public addToCart(products) {
      this.storageService.setItem(CART_KEY, JSON.stringify(products));
   }

   public clearCart() {
      this.storageService.clear();
   }

   public getCart() {
      return this.storageService.getItem(CART_KEY).then(
         (response) => {
            if (response)
               return JSON.parse(response);
            else
               return [];
         }
      );
   }
}