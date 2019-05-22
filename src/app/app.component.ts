import {Component, ViewChild, ElementRef} from '@angular/core';

import {UiComponent} from './ui/ui.component';

@Component({
  selector: 'background-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild(UiComponent) ui: UiComponent;
  image = '';
  constructor(){}
  onFileSelected(event){
    const canvas = this.canvas.nativeElement;
    const fr = new FileReader();
    fr.readAsDataURL(event.target.files[0]);
    const image = new Image();
    image.onload = function(){
      const ctx = canvas.getContext('2d');
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = 'grayscale(100%) invert(100%)';
      ctx.drawImage(image,0,0);
    };
    fr.onload = (evt) => {
      image.src = evt.target.result;
    };
    setTimeout(() => {
      this.image = canvas.toDataURL("image/jpg");
    }, 1000);
  }
}
