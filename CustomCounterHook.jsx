import useCounter from "./CouterHook";
// import Todo from "./Todo";
// Todo
function Counter() {
  const { count, incrementCount, decrementCount } = useCounter(0);
  return (
    // <Todo />
    <div className="App">
      {count}
      <br />
      <button onClick={incrementCount}>increment</button>
      <br />
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default Counter;

import { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const decrementCount = () => {
    if (count <= 0) {
      setCount(count);
    } else {
      setCount((count) => count - 1);
    }
  };

  return { count, incrementCount, decrementCount };
}

export default useCounter;
