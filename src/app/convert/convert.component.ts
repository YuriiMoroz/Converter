import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  
  amount1=0;
  amount2=0;
  currency1='UAH';
  currency2='USD';
  convertedAmount!: number;
  convertedAmount2!: number;

  currencies: string[] = ['UAH','USD', 'EUR', 'PLN'];
  rate1 = [0]
  rate2 = [0]
  rate3 = [0]
  rate4 = [0]

  
  
  constructor(private currencyService: CurrencyService) { }


  ngOnInit(): void {
    this.currencyService.getExchangeRates('UAH').subscribe(rates => {
      this.rate1[0] = rates.conversion_rates['USD'];
      this.rate1[1] = 1
      this.rate1[2] = rates.conversion_rates['EUR'];
      this.rate1[3] = rates.conversion_rates['PLN']
    });
    this.currencyService.getExchangeRates('USD').subscribe(rates => {
      this.rate2[0] = 1;
      this.rate2[1] = rates.conversion_rates['UAH']
      this.rate2[2] = rates.conversion_rates['EUR']
      this.rate2[3] = rates.conversion_rates['PLN']
    });
    this.currencyService.getExchangeRates('EUR').subscribe(rates => {
      this.rate3[0] = rates.conversion_rates['USD']
      this.rate3[1] = rates.conversion_rates['UAH']
      this.rate3[2] = 1
      this.rate3[3] = rates.conversion_rates['PLN']
    });
    this.currencyService.getExchangeRates('PLN').subscribe(rates => {
      this.rate4[0] = rates.conversion_rates['USD']
      this.rate4[1] = rates.conversion_rates['UAH']
      this.rate4[2] = rates.conversion_rates['EUR']
      this.rate4[3] = 1

    });
  }


  chouse(cur:string):number{
    if(cur=='USD'){
      return 0
    } else if(cur=='UAH'){
      return 1
    } else if(cur=='EUR'){
      return 2
    }else{
      return 3
    }
  }

  convert1(part:number): void {
    console.log('work');
    let rates = [this.rate2,this.rate1,this.rate3,this.rate4]
      if (!this.currency1 || !this.currency2) {
        return;
      }

      const j =this.chouse(this.currency1)
      const i =this.chouse(this.currency2)
      if(part==1){
        this.amount2 = parseFloat((this.amount1*rates[j][i]).toFixed(2))
      } else{
        this.amount1 = parseFloat((this.amount2*rates[i][j]).toFixed(2))
      }
      
    }

    convert2(): void {
      console.log('work');
      let rates = [this.rate2,this.rate1,this.rate3]
        if (!this.amount2 || !this.currency1 || !this.currency2) {
          return;
        }
        const j =this.chouse(this.currency1)
        const i =this.chouse(this.currency2)
        
      }
}
