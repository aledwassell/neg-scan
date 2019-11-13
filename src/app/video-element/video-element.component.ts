import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {from} from 'rxjs';

interface VideoConfig {
  video: {facingMode: string};
  audio: boolean;
}

export enum FilmType {
  bw = "grayscale(100%) invert(100%)",
  color = "invert(100%)",
  reversal = "",
}

@Component({
  selector: 'video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss']
})
export class VideoElementComponent implements OnInit {
  @ViewChild('videoElement') videoElement: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  private ctx;
  private video: any;
  private data: string;

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.initCamera({video: { facingMode: "environment"}, audio: false});
  }

  capture(){
    const canvas = this.canvas.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.ctx.canvas.width = this.video.videoWidth;
    this.ctx.canvas.height = this.video.videoHeight;
    this.ctx.filter = this.videoElement.nativeElement.style.filter;
    this.ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
    this.data = canvas.toDataURL();
  }

  clear(){
    if(this.ctx){
      this.ctx.clearRect(0, 0, this.video.videoWidth, this.video.videoHeight);
    }
  }

  initCamera(constraints: VideoConfig) {
    from(navigator.mediaDevices.getUserMedia(constraints))
    .subscribe(
      stream => {
        this.video.srcObject = stream;
        this.video.play();
      },
      error => console.log,
    );
  }
}