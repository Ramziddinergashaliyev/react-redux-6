import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../header/Header";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { like } from "../../../context/apiSlice/wishlistSlice";
import "./wishlist.scss";

function Wishlist() {
  let dispatch = useDispatch();
  let wishlistData = useSelector((state) => state.wishlist.value);
  return (
    <div>
      <Header />
      {wishlistData.length ? (
        <div className="products container">
          <h1 className="wishlist__desc">Wishlist</h1>
          <div className="products__cards">
            {wishlistData?.map((el) => (
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
            ))}
          </div>
        </div>
      ) : (
        <p className="Wishlist__title">Hechnima Topilmadi</p>
      )}
    </div>
  );
}

export default Wishlist;
