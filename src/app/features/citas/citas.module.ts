import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { ScopedComponentAModule } from "./components/scoped-component-a/scoped-component-a.module";



@NgModule({
  declarations: [
    CitasComponent
  ],
  imports: [
    CommonModule,
    ScopedComponentAModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
