import types from './types';

export const clickBtnA = () => {
  return {
    type: types.CLICK_BTN_A
  }
}

export const clickBtnB = () => {
  return {
    type: types.CLICK_BTN_B
  }
}

export const printHello = (payload) => {
  return {
    type: types.PRINT_HELLO,
    payload: payload,
  };
};
