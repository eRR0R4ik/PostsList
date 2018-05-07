import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from '../../components/Post';
import {
  getAllPosts,
} from '../../actions/posts.actions';

class ContentPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <main>
        <ul className="posts_wrapper">
          {
            posts && posts.map(post => {
              return (
                <li key={post.id} className="posts__item">
                  <Post className="post" id={post.id} title={post.title} body={post.body}  />
                </li>
              )
            })
          }
        </ul>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts, fetching } = state.allPosts;
  return {
    posts,
    fetching
  };
};

ContentPage.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  posts: PropTypes.array
};

export default connect(mapStateToProps, { getAllPosts })(ContentPage);