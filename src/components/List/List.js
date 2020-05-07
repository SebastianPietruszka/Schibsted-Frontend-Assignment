import React from "react";

import ListItem from "./components/ListItem";

function List({ articles }) {
  return (
    <div>
      {articles.map(({ date, image, preamble, title, id }) => (
        <ListItem
          date={date}
          image={image}
          key={id}
          preamble={preamble}
          title={title}
        />
      ))}
    </div>
  );
}

export default List;
