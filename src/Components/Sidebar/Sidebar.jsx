import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Prices from "./Price/Prices";
import Color from "./Color/Color";

function Sidebar() {
  return (
    <aside>
      <i class="bi bi-cart4 bi-lg"></i>
      <div className="categories">
        <Category></Category>
        <Prices></Prices>
        <Color></Color>
      </div>
    </aside>
  );
}

export default Sidebar;
