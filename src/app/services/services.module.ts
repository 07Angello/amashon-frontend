import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './products/product.service';
import { CountryService } from './countries/country.service';
import { CategoriesService } from './categories/categories.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
    CountryService,
    CategoriesService
  ]
})
export class ServicesModule { }
