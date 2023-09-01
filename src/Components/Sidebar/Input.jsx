import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Input(props) {
  let state=useSelector(state=>state.filterreducer);
  let dis=useDispatch();
  return (
    <div className="radio">
       <input type="radio" name={props.filter} checked={state[props.filter]===props.ele?"checked":""} onChange={()=>dis({type:props.filter,payload:props.ele})}/>
      <label htmlFor="">{props.ele}</label>
    </div>
  );
}

export default Input;
