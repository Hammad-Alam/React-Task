import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductPreview from "./pages/ProductPreview";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductPreview />
      <Footer />
    </div>
  );
}

export default App;
