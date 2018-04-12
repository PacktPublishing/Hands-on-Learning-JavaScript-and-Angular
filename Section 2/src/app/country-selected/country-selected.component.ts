import { Component, OnInit, Input } from '@angular/core';
import { Country } from './../country';

@Component({
  selector: 'app-country-selected',
  templateUrl: './country-selected.component.html',
  styleUrls: ['./country-selected.component.css']
})
export class CountrySelectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() country: Country;

}
