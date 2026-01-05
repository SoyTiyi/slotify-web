import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductPreview from "./components/ProductPreview/ProductPreview";
import Features from "./components/Features/Features";
import Companies from "./components/Companies/Companies";
import Industries from "./components/Industries/Industries";

export function App() {
  return (
    <div className="bg-base">
      <Navbar />
      <Hero />
      <ProductPreview />
      <Companies />
      <Features />
      <Industries />
    </div>
  );
}

export default App;
