import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  getFashionArticles as getFashionArticlesAction,
  getSportArticles as getSportArticlesAction
} from "./actions";

import List from "Components/List";
import Input from "Components/Input";

import "./Articles.scss";

function Articles({
  error,
  fashionArticles,
  getFashionArticles,
  getSportArticles,
  sportArticles
}) {
  const [articles, setArticles] = useState(sportArticles);
  const [isSportFilterChecked, setSportFilterChecked] = useState(false);
  const [isFashionFilterChecked, setFashionFilterChecked] = useState(false);
  const [sorting, setSorting] = useState("ASC");

  useEffect(() => {
    getSportArticles();
    getFashionArticles();
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
    <div className="Articles">
      <div className="Articles__controls">
        <div className="DataSources">
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
        <div className="Sorting">
          <div
            className="Sorting__button"
            onClick={() => changeSortDirection()}
          >
            Sort by date
            <span className="Sorting__arrow">
              {sorting === "ASC" ? "▲" : "▼"}
            </span>
          </div>
        </div>
      </div>
      <div className="Articles__list">
        {error ? error : <List articles={articles} />}
      </div>
    </div>
  );
}

const mapStateToProps = ({ sportArticles, fashionArticles, error }) => {
  return { sportArticles, fashionArticles, error };
};

const mapDispatchToProps = {
  getFashionArticles: getFashionArticlesAction,
  getSportArticles: getSportArticlesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
