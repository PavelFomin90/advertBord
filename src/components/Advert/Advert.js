import React from "react";
import * as s from "./Advert.css";

/**
 *
 * @param {object} props
 * @param {object} props.advert - объект объявдения
 * @param {string} props.advert.title - заголовок объявения
 * @param {string} props.advert.text - текст объявения
 * @param {string} props.advert.phone - телефон объявения
 * @returns {JSX.Element | null} Верстка объявления
 */
const Advert = props => {
  const { advert } = props;
  if (!advert) {
    return null;
  }
  const { title, text, phone } = advert;

  return (
    <div className={s.root}>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={`tel:${phone}`}>{phone}</a>
      <div className={s.status}>
        <span className={s.edit} onClick={props.clickEditAdvert}>
          Редактировать
        </span>
        <span className={s.delete} onClick={props.clickDeleteCallback}>
          Удалить
        </span>
      </div>
    </div>
  );
};

export default Advert;
