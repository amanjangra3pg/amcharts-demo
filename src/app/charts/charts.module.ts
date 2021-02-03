import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
      ChartsComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
    ],
    providers: [],
  })
  export class AppModule { }