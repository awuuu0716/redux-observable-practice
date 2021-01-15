import types from '../types/types';

export const printHello = (action) => ({
  type: types.PRINT_HELLO,
  payload: action.payload,
});
