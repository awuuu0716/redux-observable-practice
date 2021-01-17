const defaultState = {
  data: 'World',
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'PRINT_HELLO':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
