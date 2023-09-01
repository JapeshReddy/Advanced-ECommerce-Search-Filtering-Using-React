import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Recomended from "./Components/Recomended/Recomended";
import Sidebar from "./Components/Sidebar/Sidebar";
import store from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <Recomended />
      <Products />
    </Provider>
  );
}

export default App;
