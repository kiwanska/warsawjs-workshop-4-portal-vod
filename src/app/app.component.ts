import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  videoSource: string;

  title = 'WarsawJS VOD';

  modalVisible = false;
  
  closeModal() {
    this.modalVisible = false;
  }

  onWatchVideo(source) {
    this.modalVisible = true;
    this.videoSource = source;
  }

}
