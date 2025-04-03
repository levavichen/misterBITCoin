import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactFilter } from '../../models/contact.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'contact-filter',
  standalone: false,
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss'
})
export class ContactFilterComponent implements OnInit {

  private contactService = inject(ContactService)
  private destroyRef = inject(DestroyRef)
  private filterSubject = new Subject()


  filterBy!: ContactFilter

  ngOnInit(): void {
    this.contactService.filterBy$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(filterBy => this.filterBy = filterBy)

      this.filterSubject
      .pipe(
          debounceTime(400),
          distinctUntilChanged(),
          takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
          console.log('Fetching pets!')
          this.contactService.setFilter(this.filterBy)
      })
  }


  onSetFilter(filterTerm: string | number) {
    this.filterSubject.next(filterTerm)
  }
}
