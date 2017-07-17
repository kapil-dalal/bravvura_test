import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../services/products/products.service';

import { ToolsService } from '../../services/tools.service';
import { AllProductsComponent } from '../allproducts/all-products.component';

@Component({
   selector: 'all-priducts',
   templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit {
   public allCategories = [];
   constructor(private productService: ProductService,
      private navController: NavController) {

   }

   public ngOnInit() {
      this.allCategories = this.productService.getAllCategories();
   }

   public showProductsForCategory(category) {
      // console.log(category);
      this.navController.push(AllProductsComponent, { category: category });
   }

}