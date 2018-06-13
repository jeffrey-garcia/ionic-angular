import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppComponent } from './app.component';
import { LeadsComponent } from './leads/leads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { LeadsListComponent } from './leads/leads-list/leads-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    DashboardComponent,
    GoalsComponent,
    HomeComponent,
    ActivitiesComponent,
    LeadsListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent)
  ],
  entryComponents: [
    AppComponent,
    HomeComponent,
    LeadsComponent,
    GoalsComponent,
    DashboardComponent,
    ActivitiesComponent,
    LeadsListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }
