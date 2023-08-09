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
