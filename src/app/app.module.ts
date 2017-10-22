import {RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './CMS/home/home.component';
import { LoginComponent } from './CMS/login/login.component';
import { RegisterComponent } from './CMS/register/register.component';

const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forRoot(
        appRoutes
    )
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
