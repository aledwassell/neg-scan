import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {FilmType} from '../video-element/video-element.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  @Input() data = '';
  @Output() fileSelect = new EventEmitter<any>();
  @Output() capture = new EventEmitter();
  @Output() clear = new EventEmitter();
  @Output() filmType = new EventEmitter<string>();
  filmTypes = FilmType;
}