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

  selectedIndex: number = 0;

  constructor() { }

  updateIndex(index) {
    console.log("ININ//" + index);
    if (index > -1 && index < this.getArrayFromNumber().length) {
      this.selectedIndex = index;
      this.UpdateIndex.emit(index)
    }
  }

  setNextPage() {
    this.updateIndex(this.selectedIndex + 1);
  }

  setPreviousPage() {
    this.updateIndex(this.selectedIndex - 1);
  }

  getArrayFromNumber() {
    return Array.apply(null, { length: (this.noOfRecords / this.noOfRecordsPerPage) + 1 }).
      map(Number.call, Number)
  }

  ngOnInit() {
    console.log(this.noOfRecords, this.noOfRecordsPerPage);
  }

}
