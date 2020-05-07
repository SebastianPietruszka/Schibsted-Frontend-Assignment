import axios from "axios";
import {
  GET_SPORT_ARTICLES_START,
  SET_SPORT_ARTICLES,
  SET_SPORT_ARTICLES_FAILED,
  GET_FASHION_ARTICLES_START,
  SET_FASHION_ARTICLES_FAILED,
  SET_FASHION_ARTICLES,
} from "./constants";

export const getSportArticlesStart = () => {
  return {
    type: GET_SPORT_ARTICLES_START,
  };
};

export const setSportArticles = (sportArticles) => {
  return {
    type: SET_SPORT_ARTICLES,
    sportArticles,
  };
};

export const getSportArticlesFailed = (error) => {
  return {
    type: SET_SPORT_ARTICLES_FAILED,
    error,
  };
};

export const getFashionArticlesStart = () => {
  return {
    type: GET_FASHION_ARTICLES_START,
  };
};

export const setFashionArticles = (fashionArticles) => {
  return {
    type: SET_FASHION_ARTICLES,
    fashionArticles,
  };
};

export const getFashionArticlesFailed = (error) => {
  return {
    type: SET_FASHION_ARTICLES_FAILED,
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

export const getFashionArticles = () => {
  return (dispatch) => {
    dispatch(getFashionArticlesStart());
    axios
      .get("http://localhost:6010/articles/fashion")
      .then((response) => dispatch(setFashionArticles(response.data)))
      .catch((error) => dispatch(getFashionArticlesFailed(error)));
  };
};
