import React from "react";

import defaultImage from "Assets/default-image.png";
import "./ListItem.scss";

function ListItem({ date, image, preamble, title }) {
  return (
    <article className="ListItem">
      <div className="ListItem__image-container">
        <img
          src={image || defaultImage}
          width="300"
          height="170"
          className="ListItem__image"
          alt="Article image"
        />
      </div>

      <div>
        <div className="ListItem__title">{title}</div>
        <div>{date}</div>
        <div>{preamble}</div>
      </div>
    </article>
  );
}

export default ListItem;
