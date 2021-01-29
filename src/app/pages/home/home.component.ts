import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/shared/models/product';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Country } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/services/countries/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  products: Product[];
  placeHolder: string;
  search: string;
  country: string;
  category: string;
  categories: Category[];
  countries: Country[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoriesService,
    private countryService: CountryService
  ) {
    this.message = '';
    this.placeHolder = 'Search product...';
    this.search = '';
    this.country = 'ALL';
    this.category = 'ALL';
  }

  ngOnInit(): void {
    this.getProducts('ALL', 'ALL', 'ALL');
    this.getCategories('ALL');
    this.getCountries();
  }

  getProducts(filter: string, country: string, category: string): void {
    this.productService.getProducts(filter, country, category)
      .subscribe((response: any) => {
        console.log(response);
        if (response.Message && response.Message.length > 0) {
          //alert(response.Message);
         // this.getProducts('ALL', 'ALL', 'ALL');
          return;
        }

        this.products = response.Data;
      });
  }

  getCategories(filter: string): void {
    this.categoryService.getCategories(filter)
      .subscribe((response: any) => {
        if (response.Message && response.Message.length > 0) {
          console.log(response.Message);
        }

        this.categories = response.Data;
      });
  }

  updateFilterChange(event): void {
    this.getProducts(this.search, this.country, this.category);
  }

  updateFilter(event): void {
    this.getProducts(this.search, this.country, this.category);
  }

  searching(): void {
    this.getProducts(this.search, this.country, this.category);
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe((response: any) => {
        console.log(response);
        if (response.Message && response.Message.length > 0) {
          console.log(response.Message);
        }

        this.countries = response.Data;
      });
  }

  filterByCountry(country: string): void {
    this.country = country;
    this.getProducts(this.search, this.country, this.category);
  }

  filterByCategory(category: string): void {
    this.category = category;
    console.log(this.category);
    this.getProducts(this.search, this.country, this.category);
  }

}
