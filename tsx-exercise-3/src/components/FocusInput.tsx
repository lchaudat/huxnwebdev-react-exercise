import { useRef } from "react";

const FocusInput = () => {
  const focusRef = () => {
    useRef(null);
  };
  return (
    <div>
      <input type="text" />
      <button onClick={focusRef}></button>
    </div>
  );
};
export default FocusInput;
