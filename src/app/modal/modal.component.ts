import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @HostBinding('class.visible')
  @Input()
    visible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
