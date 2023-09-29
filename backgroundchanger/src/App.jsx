import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <div style={{ backgroundColor: color }}>
      <div>
        <div className="Button">
          <button onClick={() => setcolor("Black")}>Black</button>
          <button onClick={() => setcolor("Green")}>Green</button>
          <button onClick={() => setcolor("red")}>Red</button>
          <button onClick={() => setcolor("Blue")}>Blue</button>
          <button onClick={() => setcolor("Pink")}>Pink</button>
          <button onClick={() => setcolor("grey")}>Grey</button>
        </div>
      </div>
    </div>
  );
}

export default App;
