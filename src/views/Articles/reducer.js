import {
  GET_SPORT_ARTICLES_START,
  SET_SPORT_ARTICLES_FAILED,
  SET_SPORT_ARTICLES,
  GET_FASHION_ARTICLES_START,
  SET_FASHION_ARTICLES_FAILED,
  SET_FASHION_ARTICLES,
} from "./constants";

const initialState = {
  sportArticlesFetching: false,
  sportArticles: [],
  fashionArticlesFetching: false,
  fashionArticles: [],
  error: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SPORT_ARTICLES_START:
      return { ...state, sportArticlesFetching: true };
    case SET_SPORT_ARTICLES:
      return {
        ...state,
        sportArticlesFetching: false,
        sportArticles: action.sportArticles.articles,
      };
    case SET_SPORT_ARTICLES_FAILED:
      return {
        ...state,
        sportArticlesFetching: false,
        error: "Ooops! Something went wrong. Please contact your administrator",
      };

    case GET_FASHION_ARTICLES_START:
      return { ...state, fashionArticlesFetching: true };
    case SET_FASHION_ARTICLES:
      return {
        ...state,
        fashionArticlesFetching: false,
        fashionArticles: action.fashionArticles.articles,
      };
    case SET_FASHION_ARTICLES_FAILED:
      return {
        ...state,
        fashionArticlesFetching: false,
        error: "Ooops! Something went wrong. Please contact your administrator",
      };

    default:
      return state;
  }
};

export default reducer;
