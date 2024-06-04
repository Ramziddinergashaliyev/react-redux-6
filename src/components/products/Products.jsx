import React from "react";
import { useGetAllProductsQuery } from "../../context/apiSlice/apiSlice";
import "./products.scss";

function Products() {
  const { data } = useGetAllProductsQuery();

  const productData = data?.map((el) => (
    <div className="products__card">
      <div className="products__card__img">
        <img src={el?.url} alt="" />
      </div>
      <div className="products__card__info">
        <h3 className="products__card__title">title: {el?.title}</h3>
        <p className="products__card__text">price: {el?.price}</p>
      </div>
      <div className="products__btns">
        <button>?</button>
        <button>Add to cart</button>
      </div>
    </div>
  ));

  return (
    <div className="products container">
      <h1 className="products__title">Cards</h1>
      <div className="products__cards">{productData}</div>
    </div>
  );
}

export default Products;
