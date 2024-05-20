import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirectiveDirective } from './shared-directive.directive';



@NgModule({
  declarations: [
    SharedDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
