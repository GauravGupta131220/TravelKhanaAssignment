import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

import { Flights } from './flights';

@Injectable()
export class FetchFlightsService {

  private _url: string = "/assets/data/flights.json";

  constructor(private http: HttpClient) { }

  getFliightDetails(): Observable<Flights[]> {
    return this.http.get<Flights[]>(this._url)
               .catch(this.handleErrorObservable);        
  }

  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message  || "servor error");
  }

}
