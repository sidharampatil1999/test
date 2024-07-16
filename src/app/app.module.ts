import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftTextAreaBoxComponent } from './home-page/left-text-area-box/left-text-area-box.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NextButtonComponent } from './home-page/next-button/next-button.component';
import { GoBackButtonComponent } from './home-page/go-back-button/go-back-button.component';
import { KeywordsComponent } from './home-page/keywords/keywords.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftTextAreaBoxComponent,
    HomePageComponent,
    NextButtonComponent,
    GoBackButtonComponent,
    KeywordsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App module loaded');
  }
}
