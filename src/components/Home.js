import React from "react";
import { name, city } from "../data/data.js";


// const h = <h1>"Your {name} is a Web Developer from Your {city}" </h1>
function Home() {
  return (
  <div id="home">
  <h1 style={{color:'firebrick'}}> 
  {name} is a Web Developer from {city}
  </h1>
  </div>
  );
}

export default Home;
