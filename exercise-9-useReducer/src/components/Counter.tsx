import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment", payload: 1 });
  const handleDecrement = () => dispatch({ type: "decrement", payload: 1 });

  return (
    <div>
      <h1>{state.count}</h1>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button
        onClick={() => {
          handleIncrement();
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          handleDecrement();
        }}
      >
        decrement
      </button>

      <button
        onClick={() => {
          dispatch({ type: "incrementBy", payload: inputValue });
          setInputValue(0);
        }}
      >
        incrementby {inputValue}
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrementBy", payload: inputValue });
          setInputValue(0);
        }}
      >
        decrementBy {inputValue}
      </button>
    </div>
  );
};

export default Counter;
