import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CountryService} from './country.service';
import {LoggerService} from './logger.service';
import { AppComponent } from './app.component';
import { IndexListComponent } from './index-list/index-list.component';
import { CountrySelectedComponent } from './country-selected/country-selected.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { HighlightDirective } from './highlight.directive';

import { APP_CONFIG, APP_DI_CONFIG } from './global-config';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexListComponent,
    CountrySelectedComponent,
    DestinationListComponent,
    HighlightDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CountryService,
              LoggerService,
              {
                provide: APP_CONFIG,
                useValue: APP_DI_CONFIG
              }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
