import { Component, OnInit, Input } from '@angular/core';
import { Country } from './../country';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() country: Country;

}
