import React from "react";
import Home from "./Home";
import About from "./About";

const a = <a href="#home"> Home </a>
const b = <a href="#about"> About </a>
function NavBar() {
  return <nav> NavBar {a} {b}
  </nav>;
}

export default NavBar;
