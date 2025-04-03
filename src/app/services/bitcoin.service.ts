import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate(coins: number) {
    return this.http.get<number>('https://blockchain.info/tobtc?currency=USD&value=' + coins)
      .pipe(
        retry(2),
        catchError(err => throwError(() => err))
      )
  }

  public getMarketPrice() {
    const data = localStorage.getItem('marketPriceData')

    if (data) {
      return of(JSON.parse(data))
    } else {
      return this.http.get<{ values: { x: number, y: number }[] }>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        .pipe(
          map(res => {
            localStorage.setItem('marketPriceData', JSON.stringify(res.values))
            return res.values
          }),
          retry(2),
          catchError(err => throwError(() => err))
        )
    }
  }

  public getConfirmedTransactions() {
    const data = localStorage.getItem('confirmedTransactionsData')

    if (data) {
      return of(JSON.parse(data))
    } else {
      return this.http.get<{ values: [{ x: number, y: number }] }>('https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true')
        .pipe(
          map(res => {
            const chartValues = res.values.map(item => ([
              new Date(item.x * 1000).toLocaleDateString("en-US"),
              item.y
            ]))
            localStorage.setItem('confirmedTransactionsData', JSON.stringify(chartValues))
            return chartValues
          }),
          retry(2),
          catchError(err => throwError(() => err))
        )
    }
  }

}
