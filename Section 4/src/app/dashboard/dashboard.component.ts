import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import {Country} from './../country';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topCountries: Country[];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getTopCountries();
  }

  getTopCountries(): void {
    this.countryService.getCountries().subscribe(countries =>
    this.topCountries = countries.slice(1,3));
  }

}
