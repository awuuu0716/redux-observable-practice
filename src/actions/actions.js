import types from '../types/types';

export const printHello = (payload) => {
  return {
    type: types.PRINT_HELLO,
    payload: payload,
  };
};
