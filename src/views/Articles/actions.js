import axios from "axios";
import {
  GET_SPORT_ARTICLES_START,
  SET_SPORT_ARTICLES_START,
  SET_SPORT_ARTICLES_FAILED,
} from "./constants";

export const getSportArticlesStart = () => {
  return {
    type: GET_SPORT_ARTICLES_START,
  };
};

export const setSportArticles = (sportArticles) => {
  return {
    type: SET_SPORT_ARTICLES_START,
    sportArticles,
  };
};

export const getSportArticlesFailed = (error) => {
  return {
    type: SET_SPORT_ARTICLES_FAILED,
    error,
  };
};

export const getSportArticles = () => {
  return (dispatch) => {
    dispatch(getSportArticlesStart());
    axios
      .get("http://localhost:6010/articles/sports")
      .then((response) => dispatch(setSportArticles(response.data)))
      .catch((error) => dispatch(getSportArticlesFailed(error)));
  };
};
