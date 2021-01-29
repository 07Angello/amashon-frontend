import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.URL_Amashon_RestApi + 'products';
  }

  getProducts(searchedProduct: string) {
    searchedProduct = searchedProduct.length === 0 || searchedProduct === null ? 'ALL' : searchedProduct;
    const url = `${this.url}/filtered/${searchedProduct}`;
    return this.http.get(url);
  }

  getProduct(id: string) {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }
}
