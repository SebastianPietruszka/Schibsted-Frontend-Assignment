import React from "react";

import ListItem from "./components/ListItem";

function List({ sportArticles }) {
  return (
    <div>
      {sportArticles.map(({ date, image, preamble, title }) => (
        <ListItem date={date} image={image} preamble={preamble} title={title} />
      ))}
    </div>
  );
}

export default List;
