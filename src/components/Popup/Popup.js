import * as React from "react";
import * as s from "./Popup.css";

const Popup = props => {
  return (
    <div className={s.root}>
      <div className={s.content}>{props.children}</div>
    </div>
  );
};

export default Popup;
