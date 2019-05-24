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
    image.onload = () => {
      const ctx = canvas.getContext('2d');
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      const x = (canvas.width / 2) - (image.width / 2);
      const y = (canvas.height / 2) - (image.height / 2);
      const w = image.width > canvas.width ? canvas.width : image.width;
      ctx.filter = 'grayscale(100%) invert(100%)';
      ctx.drawImage(image, x, y, w, image.height);
    };
    fr.onload = (event) => {
      image.src = event.target.result;
    };
    setTimeout(() => {
      this.imageData = canvas.toDataURL("image/jpg");
    }, 1000);
  }
}
