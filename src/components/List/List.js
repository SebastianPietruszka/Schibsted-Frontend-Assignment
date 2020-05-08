import React from "react";

import ListItem from "./components/ListItem";

function List({ articles }) {
  return (
    <div>
      {!!articles.length ? articles.map(({ date, image, preamble, title, id }) => (
        <ListItem
          date={date}
          image={image}
          key={id}
          preamble={preamble}
          title={title}
        />
      )): 'No Articles :('}
    </div>
  );
}

export default List;
