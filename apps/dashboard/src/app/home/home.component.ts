import { Component, OnInit } from '@angular/core';
import { Receiver } from '@receiver-angular/api-interfaces';
import { ReceiversService } from '@receiver-angular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'receiver-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  receivers$: Observable<Receiver[]>;

  constructor(private receiversService: ReceiversService) {}

  ngOnInit(): void {
    this.loadReceivers();
  }

  loadReceivers() {
    this.receivers$ = this.receiversService.all();
  }
}
