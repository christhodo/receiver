import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ReceiversEffects } from './receivers.effects';
import * as ReceiversActions from './receivers.actions';

describe('ReceiversEffects', () => {
  let actions: Observable<any>;
  let effects: ReceiversEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ReceiversEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ReceiversEffects);
  });

  describe('loadReceivers$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ReceiversActions.loadReceivers() });

      const expected = hot('-a-|', {
        a: ReceiversActions.loadReceiversSuccess({ receivers: [] }),
      });

      expect(effects.loadReceivers$).toBeObservable(expected);
    });
  });
});
