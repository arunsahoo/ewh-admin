import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GlobalService } from './global.service';
import { UserLoginService } from './user-login.service';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NavigationComponent,
    ProfilePictureComponent,
    CustomerComponent,
    InvoicesComponent,
    ServicesComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'invoices',
        component: InvoicesComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ])
  ],
  providers: [UserLoginService, GlobalService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
