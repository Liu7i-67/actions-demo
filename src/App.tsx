import { useState } from "react";
import ABD from "./assets/abd.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://liuqi.cool" target="_blank">
          <img src={ABD} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Actions Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          计数： {count}次
        </button>
        <div className="mt-2">update by liu7i 2023/5/4</div>
      </div>
    </>
  );
}

export default App;
