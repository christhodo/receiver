import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { WildComponent } from './wild/wild/wild.component';
import { LoginComponent } from './login/login/login.component';
import { MaterialModule } from '@receiver-angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from 'apps/dashboard/src/app/routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
  ],
  declarations: [ToolbarComponent, WildComponent, LoginComponent],
  exports: [ToolbarComponent, WildComponent, LoginComponent],
})
export class UiLoginModule {}
