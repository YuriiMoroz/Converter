// currency.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
   private apiUrl = 'https://v6.exchangerate-api.com/v6/d3fd53a79ff26186c8b73ad0/latest/';
//https://v6.exchangerate-api.com/v6/d3fd53a79ff26186c8b73ad0/latest/
  constructor(private http: HttpClient) { }

  getExchangeRates(currency:string='UAH'): Observable<any> {
    return this.http.get<any>(this.apiUrl+currency);
  }
}
