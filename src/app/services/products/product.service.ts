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

  getProducts(searchedProduct: string, searchedCountry: string) {
    searchedProduct = searchedProduct.length === 0 || searchedProduct === null ? 'ALL' : searchedProduct;
    searchedCountry = searchedCountry.length === 0 || searchedCountry === null ? 'ALL' : searchedCountry;
    const url = `${this.url}/filtered/${searchedProduct}/${searchedCountry}`;
    return this.http.get(url);
  }

  getProduct(id: string) {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }
}
