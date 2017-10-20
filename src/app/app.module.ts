import {RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
