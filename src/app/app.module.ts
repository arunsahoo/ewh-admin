import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UiSwitchModule } from 'ngx-ui-switch';

import { GlobalService } from './services/global.service';
import { UserLoginService } from './services/user-login.service';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { CustomerComponent } from './components/customer/customer.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ServicesComponent } from './components/services/services.component';
import { UsersComponent } from './components/users/users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

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
    SettingsComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    UiSwitchModule,
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
