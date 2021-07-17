import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {ListService} from "../list.service";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  providers: [
    ListService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ListModule { }
