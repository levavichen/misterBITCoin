import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { User } from '../../models/user.modal';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent implements OnInit {
  user!: User
  BTC!: number
  subscription!: Subscription

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) { }



  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.subscription = this.bitcoinService.getRate(this.user.coins)
      .subscribe(btc => this.BTC = btc)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
