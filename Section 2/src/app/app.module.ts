import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IndexListComponent } from './index-list/index-list.component';
import { CountrySelectedComponent } from './country-selected/country-selected.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    IndexListComponent,
    CountrySelectedComponent,
    DestinationListComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
