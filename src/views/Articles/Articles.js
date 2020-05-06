import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSportArticles } from "./actions";
import List from "Components/List";

function Articles({ onInitSportArticles, sportArticles, error }) {
  useEffect(() => {
    onInitSportArticles();
  }, []);

  return (
    <>
      <div>Article</div>
      {error ? error : <List sportArticles={sportArticles} />}
    </>
  );
}

const mapStateToProps = ({ sportArticles, error }) => {
  return { sportArticles, error };
};

const mapDispatchToProps = (dispatch) => ({
  onInitSportArticles: () => dispatch(getSportArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
