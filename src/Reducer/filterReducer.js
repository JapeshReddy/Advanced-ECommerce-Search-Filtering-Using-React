import { combineReducers } from "redux";
import data from "../Data/data";

let initialstate = {
  input: "",
  recomended: "All Products",
  category: "All",
  price: "All",
  color: "All",
};

let filterreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "recomended":
      return { ...state, recomended: action.payload };
    case "input":
      return { ...state, input: action.payload };
    case "category":
      return { ...state, category: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "color":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

let datareducer = (state = data, action) => {
  return state;
};

let rootreducer = combineReducers({ filterreducer, datareducer });

export default rootreducer;
