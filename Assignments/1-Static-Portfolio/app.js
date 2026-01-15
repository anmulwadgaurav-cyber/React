import navBar from "./Components/navBar.js";
import hero from "./Components/hero.js"

let final = React.createElement('div', {className: "container"}, navBar, hero)
let root = ReactDOM.createRoot(document.querySelector("main"));

root.render(final);
