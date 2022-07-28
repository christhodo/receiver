import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { ReceiversEntity } from './receivers.models';
import { ReceiversEffects } from './receivers.effects';
import { ReceiversFacade } from './receivers.facade';

import * as ReceiversSelectors from './receivers.selectors';
import * as ReceiversActions from './receivers.actions';
import {
  RECEIVERS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './receivers.reducer';

interface TestSchema {
  receivers: State;
}

describe('ReceiversFacade', () => {
  let facade: ReceiversFacade;
  let store: Store<TestSchema>;
  const createReceiversEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ReceiversEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(RECEIVERS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ReceiversEffects]),
        ],
        providers: [ReceiversFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ReceiversFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allReceivers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(ReceiversActions.loadReceivers());

        list = await readFirst(facade.allReceivers$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadReceiversSuccess` to manually update list
     */
    it('allReceivers$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allReceivers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          ReceiversActions.loadReceiversSuccess({
            receivers: [
              createReceiversEntity('AAA'),
              createReceiversEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allReceivers$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
