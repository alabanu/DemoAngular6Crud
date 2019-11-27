import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { PaginationComponent } from './component/table/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCoffee);
library.add(faSpinner);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [TableComponent, SpinnerComponent, PaginationComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TableComponent,
    SpinnerComponent,
    PaginationComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
