import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}> increment </button>
      <button onClick={() => setCount(count - 1)}> decrement </button>
    </div>
  );
};
export default Count;
