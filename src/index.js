import React from "react";
import { render } from "react-dom";

import Articles from "./views/Articles";

function App() {
  return <Articles />;
}

render(App(), document.getElementById("root"));
