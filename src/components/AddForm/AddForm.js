import * as React from "react";
import * as s from "./AddForm.css";

const AddForm = props => {
  const { submitCallback, data } = props;
  console.log(data.id);

  const submitHandler = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    submitCallback(data);
  };

  return (
    <form onSubmit={submitHandler} className={s.root}>
      <input hidden value={data.id} name="id" id="id" readOnly />
      <label htmlFor="title">Заголовок:</label>
      <input
        defaultValue={data.title}
        type="text"
        id="title"
        name="title"
        maxLength="100"
        required
      />

      <label htmlFor="text">Текст:</label>
      <input
        defaultValue={data.text}
        type="text"
        id="text"
        name="text"
        maxLength="300"
        required
      />

      <label htmlFor="phone">Телефон: +7</label>
      <input
        defaultValue={data.phone}
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}[0-9]{7}"
        placeholder={"9101234567"}
        required
      />

      <button>Подтвердить</button>
    </form>
  );
};

export default AddForm;
