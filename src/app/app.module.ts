import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatCardModule,
  MatSnackBarModule 
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { Angular5TimePickerModule } from 'angular5-time-picker';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { Push } from '@ionic-native/push';

import { AppComponent } from './app.component';
import { LeadsComponent } from './leads/leads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GoalsMonthlyViewComponent } from './goals/goals-monthly-view/goals-monthly-view.component';
import { LeadsCreateComponent } from './leads/leads-create/leads-create.component';
import { LeadsSearchComponent } from './leads/leads-search/leads-search.component';

import { RestService } from './rest.service';
import { LoginComponent } from './login/login.component';

import { GenieSystemModule } from 'manulife-genie-ionic-angular-core/dist/assets/genie-core/system/system.module';

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
    LeadsSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    Angular5TimePickerModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule,
    IonicModule.forRoot(
      AppComponent, 
      {mode: 'md'} // enforce the theme to material design regardless of running platform
    ),
    SuperTabsModule.forRoot(),
    GenieSystemModule
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
    LeadsSearchComponent,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    { 
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    RestService
  ],
  bootstrap: [IonicApp]
})
export class AppModule { 
}
