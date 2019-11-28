import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {

  constructor() { }

  show: boolean = false;
  public deploymentName: any;

  showModal() {
    this.show = !this.show;
  }
  
  fnAddDeploytment() {
    alert(this.deploymentName);
  }
}