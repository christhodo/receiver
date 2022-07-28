import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as fromReceivers from './receivers.reducer';
import * as ReceiversActions from './receivers.actions';
import { Receiver } from '@receiver-angular/api-interfaces';
import { ReceiversService } from '@receiver-angular/core-data';

@Injectable()
export class ReceiversEffects {
  loadReceivers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReceiversActions.loadReceivers),
      fetch({
        run: (action) =>
          this.receiversService
            .all()
            .pipe(
              map((receivers: Receiver[]) =>
                ReceiversActions.loadReceiversSuccess({ receivers })
              )
            ),
        onError: (action, error) =>
          ReceiversActions.loadReceiversFailure({ error }),
      })
    )
  );

  loadReceiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReceiversActions.loadReceiver),
      fetch({
        run: (action) =>
          this.receiversService
            .find(action.receiverId)
            .pipe(
              map((receiver: Receiver) =>
                ReceiversActions.loadReceiverSuccess({ receiver })
              )
            ),
        onError: (action, error) =>
          ReceiversActions.loadReceiverFailure({ error }),
      })
    )
  );

  createReceiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReceiversActions.createReceiver),
      pessimisticUpdate({
        run: (action) =>
          this.receiversService
            .create(action.receiver)
            .pipe(
              map((receiver: Receiver) =>
                ReceiversActions.createReceiverSuccess({ receiver })
              )
            ),
        onError: (action, error) =>
          ReceiversActions.createReceiverFailure({ error }),
      })
    )
  );

  updateReceiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReceiversActions.updateReceiver),
      pessimisticUpdate({
        run: (action) =>
          this.receiversService
            .update(action.receiver)
            .pipe(
              map((receiver: Receiver) =>
                ReceiversActions.updateReceiverSuccess({ receiver })
              )
            ),
        onError: (action, error) =>
          ReceiversActions.updateReceiverFailure({ error }),
      })
    )
  );

  deleteReceiver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReceiversActions.deleteReceiver),
      pessimisticUpdate({
        run: (action) =>
          this.receiversService
            .delete(action.receiver)
            .pipe(
              map((receiver: Receiver) =>
                ReceiversActions.deleteReceiverSuccess({ receiver })
              )
            ),
        onError: (action, error) =>
          ReceiversActions.deleteReceiverFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private receiversService: ReceiversService
  ) {}
}
