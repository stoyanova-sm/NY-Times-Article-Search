// @flow
import React from 'react';
import './Item.less';

const Item = (props: {
  web_url: string,
  headline: string,
  pub_date: string,
  document_type: string
}) => {
  let date;
  let options;
  if (props.pub_date) {
    date = new Date(props.pub_date.substring(0, 10));
    options = { year: 'numeric', month: 'long', day: 'numeric' };
  }

  return (
    <div className="article">
      <div className="type">{props.document_type}</div>
      <a href={props.web_url} target="_blank">{props.headline}</a>
      {date && <div className="date">Published: {date.toLocaleString('en-US', options)}</div>}
    </div>
  );
};

export default Item;

