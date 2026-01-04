import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductPreview from "./components/ProductPreview/ProductPreview";
import Features from "./components/Features/Features";

export function App() {
  return (
    <div className="bg-base">
      <Navbar />
      <Hero />
      <ProductPreview />
      <Features />
    </div>
  );
}

export default App;
