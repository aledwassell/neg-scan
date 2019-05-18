import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatIconModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatIconModule],
  declarations: [ AppComponent, UiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
