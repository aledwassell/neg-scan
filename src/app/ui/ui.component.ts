import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {FilmType} from '../video-element/video-element.component';

@Component({
  selector: 'ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
})
export class UiComponent {
  @Input() data = '';
  @Output() fileSelect = new EventEmitter<any>();
  @Output() capture = new EventEmitter<string>();
  @Output() clear = new EventEmitter();
  @Output() type = new EventEmitter<string>();
  filmTypes = FilmType;
}