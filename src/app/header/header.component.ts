import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usdRate!: string;
  eurRate!: string;
  plnRate!: string;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe(rates => {
      this.usdRate = (1/rates.conversion_rates.USD).toFixed(2);
      this.eurRate = (1/rates.conversion_rates.EUR).toFixed(2);
      this.plnRate = (1/rates.conversion_rates.PLN).toFixed(2);
    });
  }

}
