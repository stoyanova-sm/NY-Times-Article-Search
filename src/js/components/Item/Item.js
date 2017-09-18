// @flow
import React from 'react';
import './Item.less';

const Item = (props: {
  web_url: string,
  headline: string,
  pub_date: string,
  document_type: string,
  snippet: string,
  img: ?string
}) => {
  let date;
  let options;
  if (props.pub_date) {
    date = new Date(props.pub_date.substring(0, 10));
    options = { year: 'numeric', month: 'long', day: 'numeric' };
  }

  return (
    <div className="article">
      {props.img && <img src={`http://graphics8.nytimes.com/${props.img}`} alt="" />}
      <div className="type">{props.document_type}</div>
      <a href={props.web_url} target="_blank">{props.headline}</a>
      {props.snippet && <div className="snippet">{props.snippet}</div>}
      {date && <div className="date">Published: {date.toLocaleString('en-US', options)}</div>}
    </div>
  );
};

export default Item;

