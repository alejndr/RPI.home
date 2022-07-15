import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState } from './state/app.state';
import { userReducers } from './state/user/user.reducers';
import { HomeComponent } from './modules/home/home.component';
import { CvComponent } from './modules/cv/cv.component';
import { HeaderComponent } from './shared/header/header.component';
import { HorizontalButtonListComponent } from './shared/horizontal-button-list/horizontal-button-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    HeaderComponent,
    HorizontalButtonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot<IAppState>({
      user: userReducers,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
