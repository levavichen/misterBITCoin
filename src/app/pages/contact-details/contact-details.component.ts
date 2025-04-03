import { Component, Input, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-details',
  standalone: false,
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent implements OnInit {

  contactId: string='5a56640252d6acddd183d319'
  contact!: Contact

  constructor(
    private contactService: ContactService
  ) { }


  ngOnInit(): void {
    this.contactService.getContactById(this.contactId)
      .subscribe(contact => this.contact = contact)
  }
}
