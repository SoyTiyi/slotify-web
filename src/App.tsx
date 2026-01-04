import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export function App() {
  return (
    <div className="bg-base">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
