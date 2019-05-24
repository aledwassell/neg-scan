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
  imageData = '';
  constructor(){}

  setUpCanvas(image: HTMLImageElement){
      const canvas = this.canvas.nativeElement;
      const ctx = canvas.getContext('2d');
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = 'grayscale(100%) invert(100%)';
      ctx.drawImage(image,0,0);
  }

  destroyCanvas(){

  }

  onFileSelected(event){
    const canvas = this.canvas.nativeElement;
    const fr = new FileReader();
    fr.readAsDataURL(event.target.files[0]);
    const image = new Image();
    console.log(image.constructor);
    image.onload = () => {
      const ctx = canvas.getContext('2d');
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = 'grayscale(100%) invert(100%)';
      ctx.drawImage(image, 0, 0, canvas.width, image.height);
    };
    fr.onload = (event) => {
      image.src = event.target.result;
    };
    setTimeout(() => {
      this.imageData = canvas.toDataURL("image/jpg");
    }, 1000);
  }
}
