import React from "react";
import Input from "../Input";

function Prices() {
  return (
    <section className="category">
      <h3>Prices</h3>
      <div className="radios">
       <Input filter='price' ele="All"></Input>
       <Input filter='price' ele="$0-50"></Input>
       <Input filter='price' ele="$50-100"></Input>
       <Input filter='price' ele="$100-150"></Input>
       <Input filter='price' ele="Over $150"></Input>
      </div>
    </section>
  );
}

export default Prices;
