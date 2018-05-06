import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getAllPosts,
} from '../../actions/posts.actions';

class ContentPage extends Component {
  state = {  }

  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    return (
      <div>Content</div>
    );
  }
}

const mapStateToProps = () => {
  return { };
};

ContentPage.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getAllPosts })(ContentPage);