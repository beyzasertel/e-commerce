import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import HeroSection from "./components/heroSection/heroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
