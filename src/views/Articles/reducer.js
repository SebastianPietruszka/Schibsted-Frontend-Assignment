import { GET_SPORT_ARTICLES, GET_FASHION_ARTICLES } from "./constants";
import moment from "moment";

const initialState = {
  sportArticlesFetching: false,
  sportArticles: [],
  fashionArticlesFetching: false,
  fashionArticles: [],
  error: ""
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_SPORT_ARTICLES}_START`:
      return { ...state, sportArticlesFetching: true };
    case `${GET_SPORT_ARTICLES}_FULFILLED`:
      return {
        ...state,
        sportArticlesFetching: false,
        sportArticles: action.payload.articles.map(article => ({
          ...article,
          parsedDate: moment.utc(article.date, "DD. MMM. YYYY hh:mm", "nb")
        }))
      };
    case `${GET_SPORT_ARTICLES}_FAILED`:
      return {
        ...state,
        sportArticlesFetching: false,
        error: "Ooops! Something went wrong. Please contact your administrator"
      };

    case `${GET_FASHION_ARTICLES}_START`:
      return { ...state, fashionArticlesFetching: true };
    case `${GET_FASHION_ARTICLES}_FULFILLED`:
      return {
        ...state,
        fashionArticlesFetching: false,
        fashionArticles: action.payload.articles.map(article => ({
          ...article,
          parsedDate: moment.utc(article.date, "DD. MMM. YYYY hh:mm", "nb")
        }))
      };
    case `${GET_FASHION_ARTICLES}_FAILED`:
      return {
        ...state,
        fashionArticlesFetching: false,
        error: "Ooops! Something went wrong. Please contact your administrator"
      };

    default:
      return state;
  }
};

export default reducer;
