import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import CreateProduct from "./components/pages/admin/create/CreateProduct";
import ManageProduct from "./components/pages/admin/manage/ManageProduct";
import Home from "./components/pages/home/Home";
import Wishlist from "./components/pages/wishlist/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<CreateProduct />} />
          <Route path="manage" element={<ManageProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
