// @flow
import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Item from '../Item/Item';
import './ArticleContainer.less';
import { getSearchResults } from '../../reducers/search';


const mapStateToProps = state => ({
  articles: state.articles.articles.docs,
  routeLocation: state.routing.location
});

export const mapDispatchToProps = (dispatch: Function) => ({
  getSearchResults: (request: string, page: number = 0) =>
    dispatch(getSearchResults(request, page))
});

class ArticlesContainer extends React.Component {

  componentDidMount() {
    let request;
    let page;
    if (this.props.routeLocation) {
      request = queryString.parse(this.props.routeLocation.search).request;
      page = queryString.parse(this.props.routeLocation.search).page;
    }
    this.props.getSearchResults(request, page - 1);
  }

  props: {
    routeLocation: string,
    getSearchResults: Function,
    articles: any
  };

  render() {
    const articles = this.props.articles;
    return (
      <div className="articlesContainer">
        {(articles && articles.length !== 0) && articles.map((article) => {
          const findThumbnail = array => (
            array.find((element) => {
              if (element.subtype === 'thumbnail') {
                return element;
              }
              return null;
            })
          );

          let image;
          if (article.multimedia.length) {
            const imageObj = findThumbnail(article.multimedia);
            if (imageObj) {
              image = imageObj.url;
            }
          } else {
            image = null;
          }

          return (
            <Item
              key={article._id} //eslint-disable-line
              web_url={article.web_url}
              headline={article.headline.main}
              pub_date={article.pub_date}
              document_type={article.document_type}
              snippet={article.snippet}
              img={image}
            />
          );
        })}
        {(articles && !articles.length) &&
        <div className="noResults">Nothing was found. Please, try another request</div>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
