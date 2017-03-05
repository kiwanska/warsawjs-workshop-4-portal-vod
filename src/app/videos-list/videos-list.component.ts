import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service'

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  constructor(private videosList: VideosService) {
    console.log(videosList);
  }

  ngOnInit() {
  }

  onWatchVideo($event) {
    console.log($event);
  }

}
