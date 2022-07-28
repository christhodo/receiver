import { Receiver } from '@receiver-angular/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedReceiver = createAction(
  '[Receivers] Reset Selected Receiver'
);
export const resetReceivers = createAction('[Receivers] Reset Receivers');

// Select Receiver
export const selectReceiver = createAction(
  '[Receivers] Select Receiver',
  props<{ selectedId: string }>()
);

// Load Receivers
export const loadReceivers = createAction('[Receivers] Load Receivers');

export const loadReceiversSuccess = createAction(
  '[Receivers] Load Receivers Success',
  props<{ receivers: Receiver[] }>()
);

export const loadReceiversFailure = createAction(
  '[Receivers] Load Receivers Failure',
  props<{ error: any }>()
);

// Load Receiver
export const loadReceiver = createAction(
  '[Receivers] Load Receiver',
  props<{ receiverId: string }>()
);

export const loadReceiverSuccess = createAction(
  '[Receivers] Load Receiver Success',
  props<{ receiver: Receiver }>()
);

export const loadReceiverFailure = createAction(
  '[Receivers] Load Receiver Failure',
  props<{ error: any }>()
);

// Create Receiver
export const createReceiver = createAction(
  '[Receivers] Create Receiver',
  props<{ receiver: Receiver }>()
);

export const createReceiverSuccess = createAction(
  '[Receivers] Create Receiver Success',
  props<{ receiver: Receiver }>()
);

export const createReceiverFailure = createAction(
  '[Receivers] Create Receiver Failure',
  props<{ error: any }>()
);

// Update Receiver
export const updateReceiver = createAction(
  '[Receivers] Update Receiver',
  props<{ receiver: Receiver }>()
);

export const updateReceiverSuccess = createAction(
  '[Receivers] Update Receiver Success',
  props<{ receiver: Receiver }>()
);

export const updateReceiverFailure = createAction(
  '[Receivers] Update Receiver Failure',
  props<{ error: any }>()
);

// Delete Receiver
export const deleteReceiver = createAction(
  '[Receivers] Delete Receiver',
  props<{ receiver: Receiver }>()
);

export const deleteReceiverCancelled = createAction(
  '[Receivers] Delete Receiver Cancelled'
);

export const deleteReceiverSuccess = createAction(
  '[Receivers] Delete Receiver Success',
  props<{ receiver: Receiver }>()
);

export const deleteReceiverFailure = createAction(
  '[Receivers] Delete Receiver Failure',
  props<{ error: any }>()
);
