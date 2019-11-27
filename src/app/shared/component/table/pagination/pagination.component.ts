import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output()
  UpdateIndex = new EventEmitter();

  @Input()
  noOfRecords: number;

  @Input()
  noOfRecordsPerPage: number;

  constructor() { }
  
  updateIndex(index) {
    console.log(index);
    this.UpdateIndex.emit(index)
  }

  getArrayFromNumber() {
    return Array.apply(null, { length: (this.noOfRecords / this.noOfRecordsPerPage) }).
      map(Number.call, Number)
  }

  ngOnInit() {
    console.log(this.noOfRecords, this.noOfRecordsPerPage);
  }

}
