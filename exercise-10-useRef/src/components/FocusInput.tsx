import { useRef } from "react";

const FocusInput = () => {
  const textinput = useRef(null);

  const focusElement = () => {
    textinput.current.focus();
  };

  return (
    <>
      <input type="text" name="" id="" ref={textinput} />
      <button onClick={() => focusElement()}>Focus on input</button>
    </>
  );
};

export default FocusInput;
