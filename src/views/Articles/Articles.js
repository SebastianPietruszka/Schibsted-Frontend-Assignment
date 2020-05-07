import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getSportArticles, getFashionArticles } from "./actions";
import List from "Components/List";
import Input from "Components/Input";

function Articles({
  error,
  onInitFashionArticles,
  onInitSportArticles,
  sportArticles,
  fashionArticles,
}) {
  const [articles, setArticles] = useState(sportArticles);
  const [isSportFilterChecked, setSportFilterChecked] = useState(false);
  const [isFashionFilterChecked, setFashionFilterChecked] = useState(false);
  const [sorting, setSorting] = useState("ASC");

  useEffect(() => {
    onInitSportArticles();
    onInitFashionArticles();
  }, []);

  useEffect(() => {
    if (!!sportArticles.length) {
      setArticles(sportArticles);
      setSportFilterChecked(true);
    }
  }, [sportArticles]);

  useEffect(() => {
    const displayedSportArticles = isSportFilterChecked ? sportArticles : [];
    const displayedFashionArticles = isFashionFilterChecked
      ? fashionArticles
      : [];

    sortArticles([...displayedSportArticles, ...displayedFashionArticles]);
  }, [isSportFilterChecked, isFashionFilterChecked]);

  useEffect(() => {
    const sortedArticles = [...articles].reverse();
    setArticles(sortedArticles);
  }, [sorting]);

  function sortArticles(articlesToSort) {
    const sortedArticles = articlesToSort.sort((a, b) =>
      sorting === "ASC"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date)
    );

    setArticles(sortedArticles);
  }

  function changeSortDirection() {
    if (sorting === "ASC") setSorting("DESC");
    if (sorting === "DESC") setSorting("ASC");
  }

  return (
    <>
      <div>
        <div>Data sources</div>
        <Input
          type="checkbox"
          name="Sport"
          onChange={() => setSportFilterChecked(!isSportFilterChecked)}
          checked={isSportFilterChecked}
        />
        <Input
          type="checkbox"
          name="Fashion"
          onChange={() => setFashionFilterChecked(!isFashionFilterChecked)}
          checked={isFashionFilterChecked}
        />
      </div>
      <div>
        <div onClick={() => changeSortDirection()}>Sort by date</div>
      </div>
      {error ? error : <List articles={articles} />}
    </>
  );
}

const mapStateToProps = ({ sportArticles, fashionArticles, error }) => {
  return { sportArticles, fashionArticles, error };
};

const mapDispatchToProps = (dispatch) => ({
  onInitSportArticles: () => dispatch(getSportArticles()),
  onInitFashionArticles: () => dispatch(getFashionArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
