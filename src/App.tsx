import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
