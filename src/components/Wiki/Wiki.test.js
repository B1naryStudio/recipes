import React from "react";
import ReactDOM from "react-dom";
import Wiki from "./Wiki";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Wiki />, div);
  ReactDOM.unmountComponentAtNode(div);
});
