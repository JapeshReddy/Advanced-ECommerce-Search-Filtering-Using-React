import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {

  let intitialState=useSelector(state=>state.filterreducer)
  let dis=useDispatch();

  return (
    <nav>
      <input type="text" placeholder="Enter the product name" value={intitialState.input} onChange={(event)=>dis({type:"input",payload:event.target.value})}/>
      <div className="icons">
        <i class="bi bi-heart-fill"></i>
        <i class="bi bi-cart2"></i>
        <i class="bi bi-person-add"></i>
      </div>
    </nav>
  );
}

export default Navbar;
