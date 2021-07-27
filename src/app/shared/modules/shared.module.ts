import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SelectedDirective } from '../directive/selected.directive';


@NgModule({
  declarations: [
    SelectedDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    SelectedDirective,
    FilterPipe,
    FormsModule
  ]
})
export class SharedModule { }
