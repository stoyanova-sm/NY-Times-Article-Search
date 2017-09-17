// @flow

import axios from 'axios';

const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

const initialState = [];

type ActionType = {
  type: string,
  error: string,
  articles: any
};
// ------------ ACTION CREATORS --------------
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const apiKey = 'b9940fb00b6a415185f5e3984c660c48';

export const getSearchResults = (request: string) => (dispatch: Function) =>
  axios.get(`${url}?api-key=${apiKey}&q=${request}`)
    .then((response) => {
      dispatch({
        type: GET_ARTICLES_SUCCESS,
        articles: response.data.response
      });
    })
    .catch((error) => {
      console.log(error);
    })
;

// ------------- REDUCER ----------------

const articles = (state: any = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return (action.articles);
    default:
      return state;
  }
};

export default articles;
