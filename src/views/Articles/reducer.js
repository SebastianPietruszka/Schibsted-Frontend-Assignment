import {
  GET_SPORT_ARTICLES_START,
  SET_SPORT_ARTICLES_FAILED,
  SET_SPORT_ARTICLES_START,
} from "./constants";

const initialState = {
  sportArticlesFetching: false,
  sportArticles: [],
  error: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SPORT_ARTICLES_START:
      return { ...state, sportArticlesFetching: true };
    case SET_SPORT_ARTICLES_START:
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

    default:
      return state;
  }
};

export default reducer;
