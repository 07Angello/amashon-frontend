import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/shared/models/product';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

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
  categories: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoriesService
  ) {
    this.message = '';
    this.placeHolder = 'Search product...';
    this.search = '';
  }

  ngOnInit(): void {
    this.getProducts('ALL');
    this.getCategories('ALL');
  }

  getProducts(filter: string): void {
    this.productService.getProducts(filter)
      .subscribe((response: any) => {
        console.log(response.Data);
        if (response.Message && response.Message.length > 0) {
          console.log(response.Message);
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
    this.getProducts(this.search);
  }

  updateFilter(event): void {
    this.getProducts(this.search);
  }

  searching(): void {
    this.getProducts(this.search);
  }

}
