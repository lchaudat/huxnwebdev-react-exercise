import { useState, useEffect } from "react";

const CountEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "count is " + count;
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};

export default CountEffect;
