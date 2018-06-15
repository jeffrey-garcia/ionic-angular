import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { AppComponent } from './app.component';
import { LeadsComponent } from './leads/leads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GoalsMonthlyViewComponent } from './goals/goals-monthly-view/goals-monthly-view.component';
import { LeadsCreateComponent } from './leads/leads-create/leads-create.component';
import { LeadsSearchComponent } from './leads/leads-search/leads-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    DashboardComponent,
    GoalsComponent,
    HomeComponent,
    ActivitiesComponent,
    GoalsMonthlyViewComponent,
    LeadsCreateComponent,
    LeadsSearchComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent, 
      {mode: 'md'} // enforce the theme to material design regardless of running platform
    ),
    SuperTabsModule.forRoot()
  ],
  entryComponents: [
    AppComponent,
    HomeComponent,
    LeadsComponent,
    GoalsComponent,
    DashboardComponent,
    ActivitiesComponent,
    GoalsMonthlyViewComponent,
    LeadsCreateComponent,
    LeadsSearchComponent
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
