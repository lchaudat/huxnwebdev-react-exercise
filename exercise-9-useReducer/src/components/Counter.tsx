import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  counterReducer(initialState,dispatch){

  }

  return (
    <div>
    </div>
  );
};

export default Counter;
