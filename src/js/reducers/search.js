// @flow
import axios from 'axios';
import Toast from '../components/Toast/Toast';

const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE';

const initialState = {
  articles: {
    articles: {},
    request: ''
  }
};

type ActionType = {
  type: string,
  error: string,
  articles: any,
  request: string
};
// ------------ ACTION CREATORS --------------
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const apiKey = 'b9940fb00b6a415185f5e3984c660c48';

export const getSearchResults = (request: string, page: number = 0) => (dispatch: Function) =>
  axios.get(`${url}?api-key=${apiKey}&q=${request}&page=${page}`)
    .then((response) => {
      dispatch({
        type: GET_ARTICLES_SUCCESS,
        articles: response.data.response,
        request
      });
    })
    .catch((error) => {
      Toast.createNotification('error', error.message);
      dispatch({ type: GET_ARTICLES_FAILURE, error });
    })
;

// ------------- REDUCER ----------------

const articles = (state: any = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        articles: action.articles,
        request: action.request
      };
    case GET_ARTICLES_FAILURE:
      return {
        state,
        error: action.error
      };
    default:
      return state;
  }
};

export default articles;
