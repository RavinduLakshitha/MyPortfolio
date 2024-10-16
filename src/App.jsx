// import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavBar";
import Profile from "./pages/Profile/profile";
// import { animated } from "@react-spring/web";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
