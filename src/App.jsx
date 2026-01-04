import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Header />
    </>
  );
}

export default App;
