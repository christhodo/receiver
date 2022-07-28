import { Injectable } from '@angular/core';
import { Receiver } from '@receiver-angular/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as ReceiversActions from './receivers.actions';
import * as ReceiversSelectors from './receivers.selectors';

@Injectable()
export class ReceiversFacade {
  loaded$ = this.store.pipe(select(ReceiversSelectors.getReceiversLoaded));
  allReceivers$ = this.store.pipe(select(ReceiversSelectors.getAllReceivers));
  selectedReceiver$ = this.store.pipe(
    select(ReceiversSelectors.getSelectedReceiver)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === ReceiversActions.createReceiver({} as any).type ||
        action.type === ReceiversActions.updateReceiver({} as any).type ||
        action.type === ReceiversActions.deleteReceiver({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) {}

  selectReceiver(selectedId: string) {
    this.dispatch(ReceiversActions.selectReceiver({ selectedId }));
  }

  loadReceivers() {
    this.dispatch(ReceiversActions.loadReceivers());
  }

  loadReceiver(receiverId: string) {
    this.dispatch(ReceiversActions.loadReceiver({ receiverId }));
  }

  saveReceiver(receiver: Receiver) {
    if (receiver.id) {
      this.updateReceiver(receiver);
    } else {
      this.createReceiver(receiver);
    }
  }

  createReceiver(receiver: Receiver) {
    this.dispatch(ReceiversActions.createReceiver({ receiver }));
  }

  updateReceiver(receiver: Receiver) {
    this.dispatch(ReceiversActions.updateReceiver({ receiver }));
  }

  deleteReceiver(receiver: Receiver) {
    this.dispatch(ReceiversActions.deleteReceiver({ receiver }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
