let box = React.createElement(
  "div",
  { className: "box" },
  "This is a square box from another file"
);

export let rectangle = () => {
  return React.createElement("div", { className: "rect" }, "This is rectangle");
};

export default box;
