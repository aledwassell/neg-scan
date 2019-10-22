import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

interface VideoConfig {
  video: {facingMode: string};
  audio: boolean;
}

export enum FilmType {
  BW = "grayscale(100%) invert(100%)",
  COLOR = "invert(100%)",
  REVERSAL = "",
}

@Component({
  selector: 'video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss']
})
export class VideoElementComponent implements OnInit {
  @ViewChild('videoElement') videoElement: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @Input() type: FilmType = FilmType.REVERSAL;
  private ctx;
  video: any;
  stream: any;
  imageData = '';

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.start();
  }

  private start(){
    this.initCamera({video: { facingMode: "environment"}, audio: false});
  }

  capture(){
    const canvas = this.canvas.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.ctx.canvas.width = this.video.videoWidth;
    this.ctx.canvas.height = this.video.videoHeight;
    this.ctx.filter = this.type;
    this.ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
  }

  clear(){
    this.ctx.clearRect(0, 0, this.video.videoWidth, this.video.videoHeight);
  }

  async initCamera(constraints: VideoConfig) {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.video.srcObject = this.stream;
      this.video.play();
    } catch(err) {
      console.error(err);
    }
  }
}