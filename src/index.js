import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Button from "./Button";
import Timer from "./timer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <Button btnLabel="Bolu Clicked" onClick={() => alert("Hello Fairmoney")} /> */}
  </React.StrictMode>
);
