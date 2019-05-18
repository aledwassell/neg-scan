import {AfterViewInit, Component, ViewChild, ContentChild, ElementRef, EventEmitter} from '@angular/core';

import {UiComponent} from './ui/ui.component';

@Component({
  selector: 'background-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild(UiComponent) ui: UiComponent;
  selectedFile: File = null;
  imagePath = null;
  dataURL = '';
  constructor(){}
  ngAfterViewInit(){
    console.log(this.ui.downloadButton.nativeElement.href);
  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(this.selectedFile);
    const canvas = this.canvas.nativeElement; 
    const ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.filter = 'grayscale(100%) invert(100%)';
    const img = new Image();
    img.onload = function(){
    ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    this.dataURL = canvas.toDataURL('image/jpeg');
    fr.onload = (evt) => {
      this.imagePath = evt.target.result;
      img.src = this.imagePath;
      console.log(this.imagePath === this.dataURL);
      console.log(this.imagePath);
      console.log(this.dataURL);
    };
  }
    
}
