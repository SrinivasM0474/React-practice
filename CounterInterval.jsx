import { useRef, useState } from "react";

function CounterInterval() {
  const [count, setCount] = useState(0);
  const intervalId = useRef();
  const incrementCount = () => {
    intervalId.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
      console.log("incrementCount");
    }, 1000);
  };
  const decrementCount = () => {
    clearInterval(intervalId.current);
  };
  return (
    <div className="App">
      {count}
      <br />
      <button onClick={incrementCount}>increment</button>
      <br />
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default CounterInterval;

// class Component

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.incrementCount = this.incrementCount.bind(this);
//     this.stopCount = this.stopCount.bind(this);
//     let intervalId;
//   }
//   incrementCount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 1000);
//   }
//   stopCount() {
//     clearInterval(this.intervalId);
//   }
//   render() {
//     return (
//       <div>
//         count {this.state.count}
//         <button onClick={this.incrementCount}>Increment</button>
//         <button onClick={this.stopCount}>STOP Count</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<TodoApp />, document.querySelector("#app"));
