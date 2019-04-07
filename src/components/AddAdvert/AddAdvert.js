import * as React from "react";
import * as s from "./AddAdvert.css";

const AddAdvert = props => {
  return (
    <div className={s.root} onClick={props.onClickAddAdvert}>
      Добавить объявление
    </div>
  );
};

export default AddAdvert;
