import types from './types';

export const clickBtnA = () => {
  return {
    type: types.CLICK_BTN_A,
  };
};

export const clickBtnB = () => {
  return {
    type: types.CLICK_BTN_B,
  };
};

export const callApi = () => {
  return {
    type: types.GET_NEW_PIC,
  };
};

export const printUrl = (payload) => {
  return {
    type: types.PRINT_PIC,
    payload,
  };
};

export const updateMessage = (payload) => {
  return {
    type: types.UPDATE_MESSAGE,
    payload,
  };
};

export const updateIsBtnAClicked = (payload) => {
  return {
    type: types.UPDATE_BUTTON_STATE,
    payload,
  };
};
