import {Component, ViewChild, ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'background-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  @ViewChild('canvas')
  canvas: ElementRef;
  @ViewChild('button')
  button: ElementRef<any>;
  selectedFile: File = null;
  imagePath = null;
  hrefLink = '';
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
    var dataURL = canvas.toDataURL('image/png');
    fr.onload = (evt) => {
      this.imagePath = evt.target.result;
      img.src = this.imagePath;
      this.button.nativeElement.href = dataURL;
    };
  }
    
}
