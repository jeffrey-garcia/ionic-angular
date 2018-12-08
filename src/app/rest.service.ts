import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { delay, tap } from 'rxjs/operators';

export enum STATUS {
  LOGIN_COMPLETED = "LOGIN_COMPLETED",
  LOGOUT_COMPLETED = "LOGOUT_COMPLETED"
}

export interface AUTH_STATUS {
  status: STATUS
}

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

  loginStub(): Observable<any> {
    return Observable.of(
      {
        status: STATUS.LOGIN_COMPLETED
      }
    ).pipe(delay(2500)) // simulate success response
  }

  logoutStub(): Observable<any> {
    return Observable.of(
      {
        status: STATUS.LOGOUT_COMPLETED
      }
    ).pipe(delay(2500)) // simulate success response
  }

}
