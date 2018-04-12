import { Component, Inject } from '@angular/core';

import { APP_CONFIG} from './global-config';
import {GlobalConfig} from './global-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(@Inject( APP_CONFIG ) private config: GlobalConfig) {
  }

  title: string;

  ngOnInit() {
    this.title = this.config.APP_TITLE;
  }

}
