import { useState } from "react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header noOfNominations={3} />
      <HeroSection />
    </>
  );
}

export default App;
