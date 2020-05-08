import axios from "../axios-instance";

export const getApiElements = (url, actionName) => {
  const request = axios.get(url);

  return dispatch => {
    dispatch({
      type: `${actionName}_START`
    });
    return request
      .then(({ data }) => {
        dispatch({
          type: `${actionName}_FULFILLED`,
          payload: data
        });
        return data;
      })
      .catch(error => {
        dispatch({
          type: `${actionName}_FAILED`
        });
        return Promise.reject(error);
      });
  };
};
