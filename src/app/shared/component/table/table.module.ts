import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table.routing.';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule
  ],
  declarations: [AddFormComponent]
})
export class TableModule { }
