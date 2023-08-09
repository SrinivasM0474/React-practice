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
