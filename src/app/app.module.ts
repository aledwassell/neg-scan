import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule, MatIconModule, MatButtonToggleModule} from '@angular/material'
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {UiComponent} from './ui/ui.component';
import {ShareComponent} from './ui/share/share.component';
import {VideoElementComponent} from './video-element/video-element.component';

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    MatButtonToggleModule,
  ],
  declarations: [ AppComponent, UiComponent, ShareComponent, VideoElementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
