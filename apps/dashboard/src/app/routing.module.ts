import { NgModule } from '@angular/core';
import { WildComponent } from 'libs/ui-login/src/lib/wild/wild/wild.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'libs/ui-login/src/lib/login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReceiversComponent } from './receivers/receivers.component';
import { AuthGuard } from '@receiver-angular/core-data';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'receivers',
    canActivate: [AuthGuard],
    children: [{ path: '', component: ReceiversComponent }],
  },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
