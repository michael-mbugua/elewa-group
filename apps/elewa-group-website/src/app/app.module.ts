import { AboutCarouselComponent } from './../../../../libs/pages/elewa/about-us/src/lib/about-carousel/about-carousel.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home'
@NgModule({
  declarations: [AppComponent,
  AboutCarouselComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
