import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { PaginationComponent } from './component/table/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactCardComponent } from './component/contact-card/contact-card.component';
import { MessageModalComponent } from './component/message-modal/message-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [TableComponent, SpinnerComponent, PaginationComponent, ContactCardComponent, MessageModalComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TableComponent,
    SpinnerComponent,
    PaginationComponent,
    FontAwesomeModule,
    ContactCardComponent,
    MessageModalComponent
  ]
})
export class SharedModule { }
