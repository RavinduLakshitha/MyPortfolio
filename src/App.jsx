import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCom from "../components/NavBar";
import { animated } from "@react-spring/web";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavbarCom />
    </div>
  );
}

export default App;
