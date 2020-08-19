/**
 * Output Management
 */

// import _ from "lodash";
// import printMe from "./print.js";

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   btn.innerHTML = "Click me and check the console!";
//   btn.onclick = printMe;
//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

// 代码分割
// async function getComponent() {
//   // return import("lodash")
//   //   .then(({ default: _ }) => {
//   //     const element = document.createElement("div");
//   //     element.innerHTML = _.join(["Hello", "webpack"], " ");
//   //     return element;
//   //   })
//   //   .catch((error) => "An error occurred while loading the component");
//   const element = document.createElement("div");
//   const { default: _ } = await import(/*webpackChunkName:"lodash" */ "loadsh");
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   return element;
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });

/**
 * Caching
 */

import _ from "lodash";
// import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  // const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;
  // element.appendChild(btn);
  // console.log("222");
  return element;
}

document.body.appendChild(component());
