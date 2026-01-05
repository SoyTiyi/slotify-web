import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductPreview from "./components/ProductPreview/ProductPreview";
import Features from "./components/Features/Features";
import Companies from "./components/Companies/Companies";
import Prices from "./components/Prices/Prices";
import Industries from "./components/Industries/Industries";
import Footer from "./components/Footer/Footer";

export function App() {
  return (
    <div className="bg-base">
      <Navbar />
      <Hero />
      <ProductPreview />
      <Companies />
      <Features />
      <Industries />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
