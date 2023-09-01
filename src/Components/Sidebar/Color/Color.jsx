import React from "react";
import Input from "../Input";

function Color() {
  return (
    <section className="category">
      <h3>Color</h3>
      <div className="radios">
       <Input filter='color' ele="All"></Input>
       <Input filter='color' ele="Black"></Input>
       <Input filter='color' ele="Blue"></Input>
       <Input filter='color' ele="Red"></Input>
       <Input filter='color' ele="Green"></Input>
       <Input filter='color' ele="White"></Input>
      </div>
    </section>
  );
}

export default Color;
