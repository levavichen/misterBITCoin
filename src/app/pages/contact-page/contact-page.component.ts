import { Component, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-page',
  standalone: false,
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  private contactService = inject(ContactService)
  contacts$: Observable<Contact[]> = this.contactService.contacts$

}
