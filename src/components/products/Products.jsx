import React from "react";
import { useGetAllProductsQuery } from "../../context/apiSlice/apiSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/apiSlice/wishlistSlice";

function Products() {
  const { data } = useGetAllProductsQuery();
  const wishlistData = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();

  const productData = data?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__card__img">
        <img src={el?.url} alt="" />
      </div>
      <div className="products__card__info">
        <h3 className="products__card__title">title: {el?.title}</h3>
        <p className="products__card__text">price: {el?.price}</p>
      </div>
      <div className="products__btns">
        <button onClick={() => dispatch(like(el))}>
          {wishlistData.some((data) => data.id === el.id) ? (
            <FaHeart color="red" />
          ) : (
            <FaRegHeart />
          )}
        </button>
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
