import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/mainLayout";
import Homepage from "./pages/homePage/homePage";
import ContactPage from "./pages/contact/contact";
import ShoppingPage from "./pages/shoppingPage/shoppingPage";
import ProductDetailPage from "./pages/productDetailPage.jsx/productDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/shop/product/:slug" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
