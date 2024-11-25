const initialState = 0;

const counterReducer = (state, action) => {
  switch (action) {
    case action.type == "increment":
      return { ...state, count: state.count + 1 };
      break;

    default:
      break;
  }
};

export { counterReducer, initialState };
