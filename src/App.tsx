import { useState } from 'react'
import './App.css'
import StaticCanvas from "./canvas/StaticCanvas.tsx";
import Canvas from "./canvas/Canvas.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StaticCanvas />
      <div style={{display: "inline-block", width: 256}} />
      <Canvas />
    </>
  );
}

export default App;
