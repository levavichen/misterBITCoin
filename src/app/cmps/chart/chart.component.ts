import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { Chart } from '../../models/bitcoin.modal';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {

  chart!: Chart

  constructor(
    private bitcoineService: BitcoinService
  ) { }

  ngOnInit(): void {
    this.bitcoineService.getConfirmedTransactions()
      .subscribe(data => {
        console.log(data)
        this.chart = {
          type: ChartType.LineChart,
          data,
          columnNames: ['Date', 'Transactions']
        }
      })
  }
}
