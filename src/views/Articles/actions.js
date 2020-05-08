import { GET_SPORT_ARTICLES, GET_FASHION_ARTICLES } from "./constants";
import { getApiElements } from "../../helpers";

export const getSportArticles = () =>
  getApiElements("/sports", GET_SPORT_ARTICLES);

export const getFashionArticles = () =>
  getApiElements("/fashion", GET_FASHION_ARTICLES);
