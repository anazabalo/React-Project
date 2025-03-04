import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import ProductView from "../components/Products/ProductView";
import CartPayment from "../components/Cart/CartPayment";

const AppRoutes = () => { return (
  <Routes>
    <Route path="/" element={<Navigate to="/products" replace />} />
    
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<ProductView />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/payment" element={<CartPayment />} />
  </Routes>
);
};

export default AppRoutes;