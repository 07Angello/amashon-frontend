import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  productDetail(id): void {
    this.router.navigate(['/detail', id]);
  }
}
