import {Component, ViewChild, ElementRef} from '@angular/core';
import {FilmType} from './video-element/video-element.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  filmTypeEnum = FilmType;
}
