import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'contact', component: ContactPageComponent, children: [
      { path: 'edit', component: ContactEditPageComponent },
      { path: 'edit/:contactId', component: ContactEditPageComponent },
    ]
  },
  { path: 'contact/:contactId', component: ContactDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
