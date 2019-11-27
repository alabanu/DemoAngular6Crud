import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  faSpinner = faSpinner;

  @Input() public isLoading = false;
  @Input() public message: string;
}
