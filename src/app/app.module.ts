import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatIconModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { ShareComponent } from './ui/share/share.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatIconModule],
  declarations: [ AppComponent, UiComponent, ShareComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
