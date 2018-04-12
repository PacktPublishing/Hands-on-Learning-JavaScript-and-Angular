import { Component, OnInit, Input } from '@angular/core';
import { Country } from './../country';

import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {CountryService} from './../country.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private countryService: CountryService,
              private location: Location) { }

  ngOnInit() {
    this.getCountry();
  }

  country: Country;
  // @Input() country: Country;

  getCountry(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.countryService.getCountryWithId(id).subscribe(country => this.country = country);
    console.log("BLAHHBLHAB: ", this.country);
  }

}
