import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  logs: String[] = [];

  // note this doesnt need observable as there is
  // no remote call involved here.
  log (line: String) {
    this.logs.push(line);
    console.log('LOGGER: '+ line);
  }

}
