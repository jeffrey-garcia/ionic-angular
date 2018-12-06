import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class RestService {
  private getNotificationUrl:string = "https://localhost/services/apexrest/handleNotifications";

  constructor(
    private http: HttpClient
  ) { }

  getNotifications(): Observable<any> {
    return this.http.get<any>(
      this.getNotificationUrl, 
      { 
        headers: {
          'defaultAction':'window.ngAppComponent.notificationReceived();'
        } 
      }
    );
  }

  logoutStub(): Observable<any> {
    return Observable.of({status:'success'}).pipe(delay(2500)) // simulate success response
  }

}
