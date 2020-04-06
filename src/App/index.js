import React from "react";
import { protectedComponent } from "./protected";

const Application = protectedComponent(props => {
  return <div className="App">{props.children}</div>;
});

export default Application;
