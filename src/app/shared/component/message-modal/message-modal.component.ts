import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {

  constructor() { }

  @Input()
  show: boolean = true;

  discard() {
    this.show = !this.show;
  }

  save(){
    this.show = !this.show;
  }
}