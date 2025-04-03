import { Injectable } from '@angular/core';
import { User } from '../models/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    name: "Robbie Williams",
    coins: 100,
    moves: []
  }

  public getUser(): User {
    return this.user
  }
}
