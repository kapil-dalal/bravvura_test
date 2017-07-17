import { Injectable } from '@angular/core';

@Injectable()
export class ToolsService {
   public getIdsAddedToCard(products) {
      let ids = {};
      if (products && products.length > 0) {
         let i = 0;
         let length = products.length;
         for (i = 0; i < length; i++) {
            ids[this.getUniqueIdForCart(products[i])] = true;
         }
      }
      return ids;
   }

   public setUniqueIdForCart(product) {
      product.uId = product.id + product.type;
   }
   public getUniqueIdForCart(product) {
      return product.id + product.type;
   }
}