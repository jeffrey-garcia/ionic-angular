import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, tap,  } from 'rxjs/operators';

export enum STATUS {
  LOGIN_COMPLETED = "LOGIN_COMPLETED",
  LOGOUT_COMPLETED = "LOGOUT_COMPLETED",
  GET_DATA_COMPLETED = "GET_DATA_COMPLETED"
}

export interface AUTH_STATUS {
  status: STATUS
}

@Injectable()
export class RestService {
  private getNotificationUrl:string = "https://localhost/services/apexrest/handleNotifications";

  constructor(
    private http: HttpClient
  ) { 
    console.log(`creating: ${this.constructor.name}`)
  }

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

  login(): Observable<any> {
    let restSvc = this
    const callbackJsHandler = {
      _loginComplete(data) {
        restSvc.loginComplete(data)
      }
    }
    window["ngAppComponent"]["loginComplete"] = callbackJsHandler[`_loginComplete`]

    return this.http.get<any>(
      "https://localhost/pages/action/login",
      { headers: {'defaultAction':'window.ngAppComponent.loginComplete'} }
    ).pipe(
      tap(
        (response: any) => {
          console.log(`can login invoked? ${JSON.stringify(response)}`);
        },
        (error) => {
          window["ngAppComponent"]["loginComplete"]('testing 123')
        }
      )
    )
  }

  loginComplete(data?:any) {
    console.log(`loginComplete ${data}`);
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

  getDataStub(): Observable<any> {
    // simulate success response
    // return Observable.of(
    //   {
    //     status: STATUS.GET_DATA_COMPLETED
    //   }
    // ).pipe(
    //   delay(2500),
    //   tap(
    //     (resp) => {
    //       console.log(`get data resp: ${JSON.stringify(resp)}`)
    //     }
    //   )
    // ) 
 
    // simulate error response
    // return Observable.throw("An error has occurred!") 
    
    // cannot be captured by the error routine in the subsriber, need to use try/catch
    throw new Error('An error has occured 2!');
  }

  getData(): Observable<any> {
    console.log("getData()")
    return Observable.create(
      (observer) => {
        try {
          this.getDataStub()
          .finally(
            () => {
              console.log("finally")
              this.getDataStub().subscribe(
                (respone) => {
                  observer.next(true)
                  observer.complete()
                },
                (error) => {
                  observer.error(false)
                  observer.complete()
                }
              )
            }
          )
          .subscribe(
            (respone) => {
              console.log(`onNext: ${respone}`)
            },
            (error) => {
              console.log(`onError: ${error}`)
            },
            () => {
              console.log(`onCompleted`)
            }
          )
        } catch (error) {
          console.log(error)
          observer.error(error)
          observer.complete()
        }
      }
    )
  }

}
