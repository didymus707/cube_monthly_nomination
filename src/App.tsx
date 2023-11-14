import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h1 className="text-3xl text-sky-600 font-bold underline">
        Hello world!
      </h1>
    </>
  );
}

export default App;
