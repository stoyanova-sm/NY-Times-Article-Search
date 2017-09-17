// @flow
import React from 'react';
import { connect } from 'react-redux';
import Item from '../Item/Item';

const mapStateToProps = state => ({
  articles: state.articles.docs
});


const ArticlesContainer = (props: { articles: any }) => {
  const articles = props.articles;

  return (
    <div className="articlesContainer">
      {(articles && articles.length !== 0) &&
        articles.map(article => (
          <Item
            key={article._id} //eslint-disable-line
            web_url={article.web_url}
            headline={article.headline.main}
            pub_date={article.pub_date}
            document_type={article.document_type}
          />
        ))}
      {(articles && !articles.length) && <div className="noResults">Nothing was found. Please, try another request</div>}
    </div>
  );
};

export default connect(mapStateToProps)(ArticlesContainer);
