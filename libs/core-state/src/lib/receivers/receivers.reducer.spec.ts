import { ReceiversEntity } from './receivers.models';
import * as ReceiversActions from './receivers.actions';
import { State, initialState, reducer } from './receivers.reducer';

describe('Receivers Reducer', () => {
  const createReceiversEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ReceiversEntity);

  beforeEach(() => {});

  describe('valid Receivers actions', () => {
    it('loadReceiversSuccess should return set the list of known Receivers', () => {
      const receivers = [
        createReceiversEntity('PRODUCT-AAA'),
        createReceiversEntity('PRODUCT-zzz'),
      ];
      const action = ReceiversActions.loadReceiversSuccess({ receivers });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
