import React from "react";
import { useGetAllProductsQuery } from "../../../../context/apiSlice/apiSlice";
import "./manageProduct.scss";

function ManageProduct() {
  const { data } = useGetAllProductsQuery();
  const manageData = data?.map((el) => (
    <div className="manage__card">
      <div className="manage__card__img">
        <img src={el?.url} alt="" />
      </div>
      <div className="manage__card__info">
        <h3 className="manage__card__title">title: {el?.title}</h3>
        <p className="manage__card__text">price: {el?.price}</p>
      </div>
      <div className="manage__btns">
        <button>?</button>
        <button>Add to cart</button>
      </div>
    </div>
  ));
  return (
    <div className="manage">
      <div className="manage__cards">{manageData}</div>;
    </div>
  );
}

export default ManageProduct;
