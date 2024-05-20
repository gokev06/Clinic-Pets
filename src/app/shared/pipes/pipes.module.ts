import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPipePipe } from './shared-pipe.pipe';



@NgModule({
  declarations: [
    SharedPipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
