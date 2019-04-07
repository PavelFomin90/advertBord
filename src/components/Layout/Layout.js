import React from "react";
import * as s from "./Layout.css";

const Layout = props => {
  return <div className={s.root}>{props.children}</div>;
};

export default Layout;
