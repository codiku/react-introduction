// Import React stuff
import React from "react";
import ReactDOM from "react-dom/client";
// Import our first root component : App
import { App } from "./App";
// Target the root tag in of our index.html and save its reference
const rootDiv = document.getElementById("root");
// Transform this root div into an object react can work with
const reactRoot = ReactDOM.createRoot(rootDiv);
// Inject the App component into the react root div.
// This way App becomes our highest component in the component three
reactRoot.render(<App />);
