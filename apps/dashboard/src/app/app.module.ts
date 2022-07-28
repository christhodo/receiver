import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@receiver-angular/core-data';
import { CoreStateModule } from '@receiver-angular/core-state';
import { EnvironmentModule } from '@receiver-angular/environment';
import { MaterialModule } from '@receiver-angular/material';
import { UiLoginModule } from '@receiver-angular/ui-login';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReceiverDetailsComponent } from './receivers/receiver-details/receiver-details.component';
import { ReceiversListComponent } from './receivers/receivers-list/receivers-list.component';
import { ReceiversComponent } from './receivers/receivers.component';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReceiversComponent,
    ReceiversListComponent,
    ReceiverDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule,
    RoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
