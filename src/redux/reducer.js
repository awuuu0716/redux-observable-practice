import types from './types';

const defaultState = {
  isBtnAClicked: false,
  message: 'Click the buttons',
  url: '',
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.CLICK_BTN_A:
      return {
        ...state,
      };
    case types.CLICK_BTN_B:
      return {
        ...state,
      };
    case types.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case types.UPDATE_BUTTON_STATE:
      return {
        ...state,
        isBtnAClicked: action.payload,
      };
    case types.PRINT_PIC:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
