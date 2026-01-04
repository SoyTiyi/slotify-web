import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductPreview from "./components/ProductPreview/ProductPreview";

export function App() {
  return (
    <div className="bg-base">
      <Navbar />
      <Hero />
      <ProductPreview />
    </div>
  );
}

export default App;
