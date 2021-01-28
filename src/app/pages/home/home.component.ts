import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  products: Product;

  constructor(
    private productService: ProductService
  ) {
    this.message = '';
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((response: any) => {
        console.log(response.Data);
        if (response.Message && response.Message.length > 0) {
          console.log(response.Message);
        }

        this.products = response.Data;
      });
  }

}
