import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './atoms/shared-button/shared-button.component';
import { InputComponent } from './molecules/input/input.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { DashboardLayoutComponent } from './templates/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './templates/auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    SharedButtonComponent,
    InputComponent,
    NavbarComponent,
    DashboardLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
