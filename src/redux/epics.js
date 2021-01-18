import { Observable } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { printHello } from './actions';
import { delay, mapTo } from 'rxjs/operators';
import types from './types';

const testEpic = (action$) =>
  action$.pipe(
    ofType(types.CLICK_BTN_A),
    delay(2000),
    mapTo({ type: types.PRINT_HELLO })
  );

export const rootEpic = combineEpics(testEpic);
