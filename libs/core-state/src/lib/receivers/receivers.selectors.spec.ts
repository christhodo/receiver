import { ReceiversEntity } from './receivers.models';
import { State, receiversAdapter, initialState } from './receivers.reducer';
import * as ReceiversSelectors from './receivers.selectors';

describe('Receivers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getReceiversId = (it) => it['id'];
  const createReceiversEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ReceiversEntity);

  let state;

  beforeEach(() => {
    state = {
      receivers: receiversAdapter.setAll(
        [
          createReceiversEntity('PRODUCT-AAA'),
          createReceiversEntity('PRODUCT-BBB'),
          createReceiversEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Receivers Selectors', () => {
    it('getAllReceivers() should return the list of Receivers', () => {
      const results = ReceiversSelectors.getAllReceivers(state);
      const selId = getReceiversId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ReceiversSelectors.getSelected(state);
      const selId = getReceiversId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getReceiversLoaded() should return the current 'loaded' status", () => {
      const result = ReceiversSelectors.getReceiversLoaded(state);

      expect(result).toBe(true);
    });

    it("getReceiversError() should return the current 'error' state", () => {
      const result = ReceiversSelectors.getReceiversError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
