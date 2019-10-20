import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

interface VideoConfig {
  video: {facingMode: string};
  audio: boolean;
}

@Component({
  selector: 'video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.css']
})
export class VideoElementComponent implements OnInit {
  @ViewChild('videoElement') videoElement: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  video: any;
  stream: any;
  imageData = '';

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.start();
  }

  start(){
    this.initCamera({video: { facingMode: "environment"}, audio: false});
  }

  capture(){
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    ctx.filter = 'grayscale(100%) invert(100%)';
    ctx.drawImage(this.video, 0, 0, 200, 200);
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