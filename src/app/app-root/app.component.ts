import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private userService: UserService,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactService.loadContacts()
      .subscribe({
        error: err => console.log('err:', err)
      })
  }
}
