import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Dashboard } from "./Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black min-h-screen">
      <Dashboard />
    </div>
  );
}

export default App;
