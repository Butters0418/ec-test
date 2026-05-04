import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Category from "../pages/Category/Category";
import Cart from "../pages/Cart/Cart";
// import NotFound from "../pages/NotFound";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Category />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
