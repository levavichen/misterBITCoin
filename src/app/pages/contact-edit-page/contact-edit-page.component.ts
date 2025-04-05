import { Component, DestroyRef, EventEmitter, Inject, OnInit, Output, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'contact-edit-page',
  standalone: false,
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.scss'
})
export class ContactEditPageComponent implements OnInit {
  
  private contactService = inject(ContactService)
  private destroyRef = inject(DestroyRef)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  contact = this.contactService.getEmptyContact()

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['contactId']),
      filter(contactId => contactId),
      switchMap(contactId => this.contactService.getContactById(contactId)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: contact => this.contact = contact
    })
  }


  onSaveContact() {
    this.contactService.saveContact(this.contact as Contact)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        error: err => console.log('err', err),
        complete: this.back
      })
  }

  onDeleteContact(contactId: string) {
    this.contactService.deleteContact(contactId)
      .subscribe({
        error: err => console.log('err:', err),
        complete: this.back
      })
  }

  takaeUntilDestroy(destroyRef: DestroyRef): any {
    throw new Error('Function not implemented.');
  }

  back = () => {
    this.router.navigateByUrl('/contact')
  }

}