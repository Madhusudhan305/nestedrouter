import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Proppares from "./components/Propparent";
import Fetchjsonser from "./components/fetch/Fechjsonser";
// import Fetchinlineapi from "./components/fetch/Fatchinlineapi";
import * as serviceWorker from "./serviceWorker";
import Form from "./components/fetch/Form";
import Nestedroute from "./components/router/Nestedroute";

// ReactDOM.render(
//   // <React.StrictMode>
//     {/* <Proppares /> */}
//     {/* <Fetchinlineapi /> */}
//     <Fetchjsonser />
//   {/* </React.StrictMode>, */}
//   document.getElementById("root")
// );

ReactDOM.render(<Nestedroute />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
