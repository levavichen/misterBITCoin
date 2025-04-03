import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { provideHttpClient } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsComponent,
    StatisticComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ChartComponent,
    ContactFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
