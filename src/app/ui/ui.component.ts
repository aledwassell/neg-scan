import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  @Input() data = '';
  @Output() fileSelect = new EventEmitter<any>();
  @Output() capture = new EventEmitter<any>();
  @Output() clear = new EventEmitter<any>();

  constructor() { }
}