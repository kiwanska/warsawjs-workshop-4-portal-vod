import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video.interface';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})

export class VideoItemComponent implements OnInit {

  @Input()
  video: Video;
  videoRating: boolean[];

  @Output()
  watchVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.videoRating = [false, false, false, false, false].map( (el, index) => index < this.video.rating );
  }

  onClickHandler(event: MouseEvent) {
    this.watchVideo.emit(this.video.source);
  }

  changeLiked() {
    this.video.liked = !this.video.liked;
  }

}
