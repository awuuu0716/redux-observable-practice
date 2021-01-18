import types from './types';

const defaultState = {
  data: 'World',
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.PRINT_HELLO:
      return {
        ...state,
        data: 'Hello',
      };
    case types.CLICK_BTN_A:
      return {
        ...state,
      };
    case types.CLICK_BTN_B:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
