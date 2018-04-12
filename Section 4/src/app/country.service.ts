import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { COUNTRIES } from './mock-countries';
import {Country} from './country';

import {LoggerService} from './logger.service';

 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CountryService {

  private countryServiceURL = "http://localhost:3000/countries";
  
  // constructor(@Optional() private loggerService: LoggerService) { }
  constructor(private loggerService: LoggerService
    , private httpClient:HttpClient) { }

  // getCountries(): Observable<Country[]> {
  //   this.loggerService.log("Getting list of countries..");
  //   return of(COUNTRIES);
  // }

  // getCountryWithId(id): Observable<Country> {
  //   this.loggerService.log("Getting country with id countries..");
  //   return of(COUNTRIES.find(country => country.id === id));
  // }

  getCountries(): Observable<Country[]> {
    this.loggerService.log("Getting list of countries..");
    // return of(COUNTRIES);
    return this.httpClient.get<Country[]>(this.countryServiceURL).pipe(
      catchError(this.handleError('getCountries', []))
    );
  }
  getCountryWithId(id): Observable<Country> {
    this.loggerService.log("Getting country with id countries..");
    return this.httpClient.get<Country>(this.countryServiceURL + "/"+id).pipe(
      catchError(this.handleError<Country>(`getCountryWithId id=${id}`))
    );
  }

  /**
   * Add new country to db
   * @param country 
   */
  addCountry (country: Country): Observable<Country> {
    return this.httpClient.post<Country>(this.countryServiceURL, country, httpOptions).pipe(
      catchError(this.handleError<Country>('addCountry'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.loggerService.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

