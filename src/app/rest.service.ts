import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

}
