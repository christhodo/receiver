import { Receiver } from '@receiver-angular/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ReceiversActions from './receivers.actions';

export const RECEIVERS_FEATURE_KEY = 'receivers';

export interface ReceiversState extends EntityState<Receiver> {
  selectedId?: string | number; // which receivers record has been selected
  loaded: boolean; // has the receivers list been loaded
  error?: string | null; // last known error (if any)
}

export interface ReceiversPartialState {
  readonly [RECEIVERS_FEATURE_KEY]: ReceiversState;
}

export const receiversAdapter: EntityAdapter<Receiver> = createEntityAdapter();

export const initialReceiversState: ReceiversState = receiversAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _receiversReducer = createReducer(
  initialReceiversState,
  on(ReceiversActions.selectReceiver, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(ReceiversActions.resetSelectedReceiver, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(ReceiversActions.resetReceivers, (state) =>
    receiversAdapter.removeAll(state)
  ),
  // Load receivers
  on(ReceiversActions.loadReceivers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ReceiversActions.loadReceiversSuccess, (state, { receivers }) =>
    receiversAdapter.setAll(receivers, { ...state, loaded: true })
  ),
  on(ReceiversActions.loadReceiversFailure, onFailure),
  // Load receiver
  on(ReceiversActions.loadReceiver, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ReceiversActions.loadReceiverSuccess, (state, { receiver }) =>
    receiversAdapter.upsertOne(receiver, { ...state, loaded: true })
  ),
  on(ReceiversActions.loadReceiverFailure, onFailure),
  // Add receiver
  on(ReceiversActions.createReceiverSuccess, (state, { receiver }) =>
    receiversAdapter.addOne(receiver, state)
  ),
  on(ReceiversActions.createReceiverFailure, onFailure),
  // Update receiver
  on(ReceiversActions.updateReceiverSuccess, (state, { receiver }) =>
    receiversAdapter.updateOne({ id: receiver.id, changes: receiver }, state)
  ),
  on(ReceiversActions.updateReceiverFailure, onFailure),
  // Delete receiver
  on(ReceiversActions.deleteReceiverSuccess, (state, { receiver }) =>
    receiversAdapter.removeOne(receiver.id, state)
  ),
  on(ReceiversActions.deleteReceiverFailure, onFailure)
);

export function receiversReducer(
  state: ReceiversState | undefined,
  action: Action
) {
  return _receiversReducer(state, action);
}
