import { legacy_createStore } from "redux";
import rootreducer from "../Reducer/filterReducer";

let store = legacy_createStore(rootreducer);

export default store;
