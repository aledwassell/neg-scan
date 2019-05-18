import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  @Input() photoName = '';
  @Output() fileSelect = new EventEmitter<any>();
  constructor() { }
}