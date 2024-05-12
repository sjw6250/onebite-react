import "./App.css";
import Header from "./components/Header";
import { useRef, useState } from "react";

// custom hook for incrementing the count
function useIncrement() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return [count, onClick];
}

function App() {
  const [count, onClick] = useIncrement();
  const [name, setName] = useState("");
  const testNum = useRef(0);

  const nameChnageHandler = (e) => {
    setName(e.target.value);
  };

  const incrementRef = () => {
    testNum.current += 1;
    console.log(testNum.current);
  };

  console.log(testNum.current);

  return (
    <>
      <Header />
      <h1>React App</h1>
      <h2>{count}</h2>
      <button onClick={onClick}>Increment</button>
      <input type="text" value={name} onChange={nameChnageHandler} />
      <h2>{name}</h2>

      <button onClick={incrementRef}>Increment Ref</button>
    </>
  );
}

export default App;
