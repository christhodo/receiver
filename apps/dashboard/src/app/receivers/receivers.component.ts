import { Component, OnInit } from '@angular/core';
import { Receiver } from '@receiver-angular/api-interfaces';
import { ReceiversFacade } from '@receiver-angular/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'receiver-angular-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.scss'],
})
export class ReceiversComponent implements OnInit {
  allReceivers$: Observable<Receiver[]> = this.receiversFacade.allReceivers$;
  selectedReceiver$: Observable<Receiver> = this.receiversFacade
    .selectedReceiver$;

  constructor(private receiversFacade: ReceiversFacade) {}

  ngOnInit(): void {
    this.reset();
    this.receiversFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadReceivers();
    this.selectReceiver(null);
  }

  resetForm() {
    this.selectReceiver(null);
  }

  selectReceiver(receiver: Receiver) {
    this.receiversFacade.selectReceiver(receiver?.id);
  }

  loadReceivers() {
    this.receiversFacade.loadReceivers();
  }

  saveReceiver(receiver: Receiver) {
    this.receiversFacade.saveReceiver(receiver);
  }

  deleteReceiver(receiver: Receiver) {
    this.receiversFacade.deleteReceiver(receiver);
  }
}
