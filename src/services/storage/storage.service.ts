import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {
   constructor(
      private storage: Storage
   ) { }

   public setItem(key, value) {
      return this.storage.set(key, value);
   }

   public getItem(key) {
      return this.storage.get(key)
   }

   public clear() {
      return this.storage.clear();
   }
}