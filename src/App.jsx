import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
const HomePage = React.lazy(() => import("./pages/HomePage"))
import CartPage from "./pages/CartPage";
import FavouritePage from "./pages/FavouritePage";
import RegisterPage from "./pages/RegisterPage";
import SinglePage from './pages/SinglePage';
import FilterPage from './pages/FilterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />{" "}
          <Route path="cart/:id" element={<SinglePage />} />{" "}
          <Route path="filters" element={<FilterPage/>} />
          <Route path="like" element={<FavouritePage />} />{" "}
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
