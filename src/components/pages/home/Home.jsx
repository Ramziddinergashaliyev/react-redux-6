import React from "react";
import "./home.scss";
import Products from "../../products/Products";
import Header from "../../header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
}

export default Home;
