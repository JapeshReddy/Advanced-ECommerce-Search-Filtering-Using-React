import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

let root = ReactDOM.createRoot(document.getElementById("root"));

//fragment
root.render(
  //1st
  //     <div>
  //     <h1>hello this side utsav</h1>
  //   <p>hii i am paragraph</p>
  //  </div>

  //  <React.Fragment>
  // <h1>hello this side utsav</h1>
  // <p>hii i am paragraph</p>
  // </React.Fragment>

  //    <>
  //    <h1>hello this side utsav</h1>
  //    <p>hii i am paragraph</p>
  //    </>

  //    <div>
  //      <navbar></navbar>
  //    </div>

  // [
  //     <h1>hello this side utsav</h1>,
  //        <p>hii i am paragraph{3+7}</p>,
  //        <img/>,
  //        <h1>{console.log('hii this side utsav ')} </h1>,
  //        <h1>{true ? console.log('hii utsav again'):null}</h1>
  // ]

  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App></App>
    {/* <ProductsList></ProductsList> */}
    {/* </Provider> */}
  </React.StrictMode>
);
