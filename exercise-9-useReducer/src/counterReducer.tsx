// enum CountActionKind {
//   INCREASE = "INCREASE",
//   DECREASE = "DECREASE",
// }

interface State {
  count: number;
}

interface Action {
  type: string;
  payload: number;
}

const initialState = { count: 0 };

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "incrementBy":
      return { count: state.count + action.payload };

    case "decrementBy":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

export { counterReducer, initialState };
