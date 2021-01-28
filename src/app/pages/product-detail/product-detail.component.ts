import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productId: string;

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.subscribe(params => {
      this.productId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getProductDetailInformation()
  }

  getProductDetailInformation(): void {
    this.productService.getProduct(this.productId)
      .subscribe((response: any) => {
        if (response.Message && response.Message.length > 0) {
          console.log(response.Message);
        }

        this.product = response.Data;
      });
  }

}
