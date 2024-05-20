import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/atoms/shared-button/shared-button.component';
import { InputComponent } from './components/molecules/input/input.component';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { DashboardLayoutComponent } from './components/templates/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './components/templates/auth-layout/auth-layout.component';
import { SharedDirectiveDirective } from './directives/shared-directive.directive';
import { SharedPipePipe } from './pipes/shared-pipe.pipe';

@NgModule({
  declarations: [
    SharedButtonComponent,
    InputComponent,
    NavbarComponent,
    DashboardLayoutComponent,
    AuthLayoutComponent,
    SharedPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedButtonComponent,
    InputComponent,
    NavbarComponent,
    DashboardLayoutComponent,
    AuthLayoutComponent,
    SharedPipePipe
  ]
})
export class SharedModule { }
