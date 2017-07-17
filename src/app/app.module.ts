import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AllProductsComponent } from '../pages/allproducts/all-products.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { CartComponent } from '../pages/cart/cart.component';
import { ProductDetailsComponent } from '../pages/product-details/product-details.component';

import { MyApp } from './app.component';

import { StorageService } from '../services/storage/storage.service';
import { ProductService } from '../services/products/products.service';
import { CartService } from '../services/cart/cart.service';
import { ToolsService } from '../services/tools.service';

@NgModule({
   declarations: [
      MyApp,
      AllProductsComponent,
      CategoriesComponent,
      CartComponent,
      ProductDetailsComponent
   ],
   imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      AllProductsComponent,
      CategoriesComponent,
      CartComponent,
      ProductDetailsComponent
   ],
   providers: [
      StatusBar,
      SplashScreen,
      Storage,
      { provide: ErrorHandler, useClass: IonicErrorHandler },
      ToolsService,
      StorageService,
      CartService,
      ProductService,
   ]
})
export class AppModule { }
