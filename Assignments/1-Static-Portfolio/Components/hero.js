let year = React.createElement("p", { className: "year" }, "2024");
let line = React.createElement("div", { className: "line" });
let designation = React.createElement(
  "p",
  { classname: "designation" },
  "Product Designer"
);

let leftSidePanel = React.createElement(
  "div",
  { className: "left-side-panel" },
  year,
  line,
  designation
);

let plusIcon = React.createElement("i", { className: "ri-add-fill" });
let downArrowIcon = React.createElement("i", {
  className: "ri-arrow-down-line",
});
let scrollDownText = React.createElement(
  "p",
  { className: "scroll-down-text" },
  "Scroll down"
);

let digitOne = React.createElement(
  "p",
  { className: "digit" },
  plusIcon,
  "200"
);
let digitOneText = React.createElement(
  "p",
  { className: "text" },
  "Project completed"
);

let digitTwo = React.createElement("p", { className: "digit" }, plusIcon, "50");
let digitTwoText = React.createElement(
  "p",
  { className: "text" },
  "Startup raised"
);

let completedProject = React.createElement(
  "p",
  { className: "completed-project" },
  digitOne,
  digitOneText
);
let startupRaised = React.createElement(
  "p",
  { className: "raised-project" },
  digitTwo,
  digitTwoText
);

let hello = React.createElement("h1", { className: "hello-word" }, "Hello");
let author = React.createElement(
  "p",
  { className: "author" },
  "- It's D.Nova a design wizerd"
);

let topSection = React.createElement(
  "div",
  { className: "top-section" },
  completedProject,
  startupRaised
);
let middleSection = React.createElement(
  "div",
  { className: "greet" },
  hello,
  author
);

let scrollDownBtn = React.createElement(
  "p",
  { className: "scroll-down-btn" },
  scrollDownText,
  downArrowIcon
);

let rightSidePanel = React.createElement(
  "div",
  { className: "right-side-panel" },
  topSection,
  middleSection,
  scrollDownBtn
);

let image = React.createElement("div", { className: "model-image" });

let hero = React.createElement(
  "div",
  { className: "hero" },
  leftSidePanel,
  rightSidePanel,
  image
);

export default hero;
