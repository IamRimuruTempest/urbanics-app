import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ApiService {

   url = "https://api.thingspeak.com/channels/1736163/feeds.json?api_key=MZFDQ3OROXG0DKJQ&results=1"

  constructor(private http: HttpClient) { 
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

}
