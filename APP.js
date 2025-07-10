import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//      "h1", 
//      {id: "heading"},
//      "React with Shauryaa🚀"
// );

// console.log(heading);



// JSX - is not HTMl in JS, we can say it is HTML/XML like Syntax 

// JSX => React.createElement => ReactElement-JS Object =>  HTMLElement(render)
const jsxHeading = <h1 className="head">React using Shauryaa🚀</h1>;

// React Component
// Class Based Components - OLD way
// Function Based Components - NEW way

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
