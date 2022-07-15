import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState } from './state/app.state';
import { userReducers } from './state/user/user.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<IAppState>({
      user: userReducers,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
