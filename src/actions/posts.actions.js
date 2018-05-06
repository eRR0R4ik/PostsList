import { postsConstants } from '../constants';
import Api from '../api';


export const postActions = {
  getAllPosts
};


function getAllPostsRequest() {
  return {
    type: postsConstants.GET_POSTS_REQUEST
  }
}

function getAllPostsSuccess(posts) {
  return {
    type: postsConstants.GET_POSTS_SUCCESS,
    posts
  }
}

function getAllPostsFailure(error) {
  return {
    type: postsConstants.GET_POSTS_FAILURE,
    error
  }
}

export function getAllPosts() {
  return async dispatch => {
    dispatch(getAllPostsRequest());
    try {
      const res = await Api.getAllPosts();
      dispatch(getAllPostsSuccess(res.data));
    }
    catch (err) {
      dispatch(getAllPostsFailure(err));
    }
  };
}