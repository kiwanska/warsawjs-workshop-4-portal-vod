import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  src: string;
  size: number;

  @Input()
  width: 'small' | 'medium' | 'large' = 'large';

  sizes = new Map<string, number>([['small', 20], ['medium', 50], ['large', 100]]);

  constructor() { 
    this.src = '/assets/angular.png';
  }

  ngOnInit() {
    this.size = this.sizes.get(this.width);
  }

}
