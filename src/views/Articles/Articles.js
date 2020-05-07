import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSportArticles, getFashionArticles } from "./actions";
import List from "Components/List";

function Articles({
  error,
  onInitFashionArticles,
  onInitSportArticles,
  sportArticles,
  fashionArticles,
}) {
  useEffect(() => {
    onInitSportArticles();
    onInitFashionArticles();
  }, []);

  return (
    <>
      <div>Article</div>
      {error ? (
        error
      ) : (
        <List articles={[...sportArticles, ...fashionArticles]} />
      )}
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
