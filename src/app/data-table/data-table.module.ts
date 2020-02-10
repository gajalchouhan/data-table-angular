import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DataTableService } from './data-table.service';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ],
  providers: [DataTableService]
})
export class DataTableModule { }
