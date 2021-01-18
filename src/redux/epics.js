import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map, filter, mergeMap } from 'rxjs/operators';
import { printUrl, updateMessage, updateIsBtnAClicked } from './actions';
import types from './types';

const apiEpic = (action$) =>
  action$.pipe(
    ofType(types.GET_NEW_PIC),
    switchMap(() =>
      ajax('https://api.thecatapi.com/v1/images/search').pipe(
        map(({ response }) => printUrl(response[0].url))
      )
    )
  );

const AEpic = (action$) =>
  action$.pipe(
    ofType(types.CLICK_BTN_A),
    mergeMap(() =>
      concat(
        of(updateMessage('Button B is ready!')),
        of(updateIsBtnAClicked(true))
      )
    )
  );

const testEpic = (action$, state$) =>
  action$.pipe(
    ofType(types.CLICK_BTN_B),
    filter(() => state$.value.test.isBtnAClicked),
    mergeMap(() =>
      concat(
        of(updateMessage('Button B is clicked!')),
        of(updateIsBtnAClicked(false))
      )
    )
  );

export const rootEpic = combineEpics(apiEpic, AEpic, testEpic);
