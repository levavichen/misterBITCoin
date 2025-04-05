import { Component, Input, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-details',
  standalone: false,
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent implements OnInit {
  private contactService = inject(ContactService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  contact$: Observable<Contact> = this.route.params.pipe(
    switchMap(params => this.contactService.getContactById(params['contactId']))
  )


  ngOnInit(): void {
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
