import box, { rectangle } from "./box.js";
import circle from "./circle.js";

let h1 = React.createElement(
  "h1",
  { className: "heading" },
  " We merged them in a single file"
);

let rect = rectangle();

let divOne = React.createElement("div", null, [box, rect, circle, h1]);

let root = ReactDOM.createRoot(document.querySelector("main"));

root.render(divOne);

//root.render(h1, divOne) //You cannot pass more than one argument in render function
