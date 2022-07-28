import { Receiver } from '@receiver-angular/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  receiversAdapter,
  ReceiversState,
  RECEIVERS_FEATURE_KEY,
} from './receivers.reducer';

// Lookup the 'Receivers' feature state managed by NgRx
export const getReceiversState = createFeatureSelector<ReceiversState>(
  RECEIVERS_FEATURE_KEY
);

const { selectAll, selectEntities } = receiversAdapter.getSelectors();

export const getReceiversLoaded = createSelector(
  getReceiversState,
  (state: ReceiversState) => state.loaded
);

export const getReceiversError = createSelector(
  getReceiversState,
  (state: ReceiversState) => state.error
);

export const getAllReceivers = createSelector(
  getReceiversState,
  (state: ReceiversState) => selectAll(state)
);

export const getReceiversEntities = createSelector(
  getReceiversState,
  (state: ReceiversState) => selectEntities(state)
);

export const getSelectedReceiverId = createSelector(
  getReceiversState,
  (state: ReceiversState) => state.selectedId
);

const emptyReceiver: Receiver = {
  id: null,
  title: '',
  description: '',
};

export const getSelectedReceiver = createSelector(
  getReceiversEntities,
  getSelectedReceiverId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyReceiver;
  }
);
