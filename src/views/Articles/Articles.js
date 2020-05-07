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

    setArticles([...displayedSportArticles, ...displayedFashionArticles]);
  }, [isSportFilterChecked, isFashionFilterChecked]);

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
