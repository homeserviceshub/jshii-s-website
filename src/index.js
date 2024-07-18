import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import AppRoutes from "./routes";
// import { Provider } from "react-redux";
// import MyStore from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={MyStore}> */}
    <AppRoutes />
    {/* </Provider> */}
  </React.StrictMode>
);
