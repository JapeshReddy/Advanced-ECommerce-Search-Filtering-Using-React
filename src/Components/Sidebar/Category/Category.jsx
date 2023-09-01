import React from "react";
import "./Category.css";
import Input from "../Input";
function Category() {
  return (
    <section className="category">
      <h3>Category</h3>
      <div className="radios">
        <Input ele="All"  filter="category"></Input>
        <Input ele="Sneakers" filter="category"></Input>
        <Input ele="Flats" filter="category"></Input>
        <Input ele="Sandals" filter="category"></Input>
        <Input ele="Heels" filter="category"></Input>
      </div>
    </section>
  );
}

export default Category;
