import { useState } from "react";
import { Navigation } from "./components/Navigation.js";
import CounterContext from "./context/CounterContext.js";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Navigation />
      </CounterContext.Provider>
    </>
  );
}
