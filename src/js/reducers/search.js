import axios from 'axios';
// ------------CONSTANTS --------------


const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

// ------------------ TYPES -----------------
const initialState = {
  comments: []
};

// ------------ ACTION CREATORS --------------
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const apiKey = 'b9940fb00b6a415185f5e3984c660c48';

export const getSearchResults = request => (dispatch) => {
  axios.get(`${url}?api-key=${apiKey}&q=${request}`)
      .then((response) => {
        dispatch({
          type: GET_ARTICLES_SUCCESS,
          articles: response.data.response
        });
      })
      .catch((error) => {
        console.log(error);
      });
};

// ------------- REDUCER ----------------

const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        articles: action.articles
      };
    default:
      return state;
  }
};

export default articles;
