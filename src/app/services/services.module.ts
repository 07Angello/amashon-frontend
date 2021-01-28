import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './products/product.service';
import { CountryService } from './countries/country.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
    CountryService
  ]
})
export class ServicesModule { }
