import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from './../mock-countries';
import {Country} from './../country';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})
export class IndexListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countries = COUNTRIES;

  selectedCountry: Country;

  // on select action
  onSelect (country: Country) {
    // assign clicked country as selected country.
    this.selectedCountry = country;
  }

}
