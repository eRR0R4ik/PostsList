import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function Post(props) {
  const { id, title, body } = props;
  return (
    <div className="card">
      <img src={`https://unsplash.it/800/600?image=${id}`} className="card__image"  />
      <div className="card__content">
        <div className="card__title">{title}</div>
        <p className="card__text">{body}</p>
        <Link to={`${props.match.url}/${id}`}>
          <button className="btn btn--block card__btn">More...</button>
        </Link>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  match: PropTypes.object,
};

export default Post;