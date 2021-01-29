import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.URL_Amashon_RestApi + 'Countries';
  }

  getCountries() {
    const url = `${this.url}`;
    return this.http.get(url);
  }

  getCountry(id: string) {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }
}
