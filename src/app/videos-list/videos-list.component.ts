import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideosService } from '../videos.service'

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  @Output()
  watchVideo = new EventEmitter();

  constructor(private videosList: VideosService) {
  }

  ngOnInit() {
  }

  onWatchVideo($event) {
    this.watchVideo.emit($event);;
  }

}
