let btns = ["About me", "Portfolio", "Services", "Blog"];

let btn = btns.map((link) => {
  return React.createElement("a", { className: "links" }, link);
});

let arrowIcon = React.createElement("i", {
  className: "ri-arrow-right-up-long-line",
});
let logoIcon = React.createElement("i", {
  className: "ri-color-filter-fill",
});

let logo = React.createElement("div", { className: "logo" }, logoIcon);
let btnDiv = React.createElement("div", { className: "btn-div" }, btn);
let leftSide = React.createElement(
  "div",
  { className: "left-side" },
  logo,
  btnDiv
);
let bookCall = React.createElement(
  "p",
  { className: "book-call" },
  `Book A Call`,
  arrowIcon
);

let navBar = React.createElement(
  "div",
  { className: "nav" },
  leftSide,
  bookCall
);

export default navBar;
