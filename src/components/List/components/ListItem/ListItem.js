import React from "react";

import defaultImage from "Assets/default-image.png";
import "./ListItem.scss";

function ListItem({ date, image, preamble, title }) {
  return (
    <article className="ListItem">
      <picture className="ListItem__image-container">
        <img
          src={image || defaultImage}
          width="220"
          height="130"
          className="ListItem__image"
          alt="Article image"
        />
      </picture>

      <div className="ListItem__description">
        <div className="ListItem__title">{title}</div>
        <div className="ListItem__date">{date}</div>
        <div>{preamble}</div>
      </div>
    </article>
  );
}

export default ListItem;
