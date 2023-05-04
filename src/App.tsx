import { Header, Footer, NotFoundBlock } from "./components";
import { Catalog, Cart, Product, Home } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
