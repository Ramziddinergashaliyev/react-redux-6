import React, { useState } from "react";
import "./createProduct.scss";
import axios from "axios";

let initialState = {
  url: "",
  title: "",
  price: "",
  category: "",
};

function CreateProduct() {
  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://66458544b8925626f892195b.mockapi.io/api/vi/products`, data)
      .then((res) => {
        console.log(res);
        setData(initialState);
        data.img = "";
        data.title = "";
        data.price = "";
        data.category = "";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form" action="">
        <input
          value={data.url}
          onChange={(e) => setData((p) => ({ ...p, url: e.target.value }))}
          placeholder="url"
          type="text"
        />
        <input
          value={data.title}
          onChange={(e) => setData((p) => ({ ...p, title: e.target.value }))}
          placeholder="title"
          type="text"
        />
        <input
          value={data.price}
          onChange={(e) => setData((p) => ({ ...p, price: e.target.value }))}
          placeholder="price"
          type="number"
        />
        <input
          value={data.category}
          onChange={(e) => setData((p) => ({ ...p, category: e.target.value }))}
          placeholder="category"
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
