import React from "react";
import "./products.css";
import Card from "./Card";
import { useSelector } from "react-redux";

function Products() {
  let state = useSelector((state) => state.filterreducer);
  let data = useSelector((state) => state.datareducer);
  if (state.recomended !== "All Products") {
    data = data.filter((ele) => ele.company === state.recomended);
    console.log(data);
  }
  if (state.input !== "") {
    data = data.filter((ele) =>
      ele.title.toLowerCase().includes(state.input.toLowerCase())
    );
    console.log(data);
  }

  if (state.color !== "All") {
    data = data.filter((ele) => ele.color === state.color.toLowerCase());
    console.log(data);
  }

  if (state.category !== "All") {
    data = data.filter((ele) => ele.category === state.category.toLowerCase());
    console.log(data);
  }

  if (state.price !== "All") {
    switch (state.price) {
      case "$0-50":
        data = data.filter((ele) => ele.newPrice >= 0 && ele.newPrice <= 50);
        break;
      case "$50-100":
        data = data.filter((ele) => ele.newPrice >= 50 && ele.newPrice <= 100);
        break;
      case "$100-150":
        data = data.filter((ele) => ele.newPrice >= 100 && ele.newPrice <= 150);
        break;
      case "Over $150":
        data = data.filter((ele) => ele.newPrice >= 150);
        break;
      default:
        return data;
    }
  }
  return (
    <section className="card-container">
      {console.log(state)}
      {data.length !== 0 ? (
        data.map((ele, i) => {
          return <Card ele={ele}></Card>;
        })
      ) : (
        <h1>No data found </h1>
      )}
    </section>
  );
}

export default Products;
