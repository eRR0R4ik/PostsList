import { postsConstants } from '../constants';

const initialState = {
  posts: null
}

export function allPosts(state = initialState, action) {
  switch (action.type) {

  case postsConstants.GET_POSTS_REQUEST:
    return {
      ...state,
      fetching: true
    };

  case postsConstants.GET_POSTS_SUCCESS:
    return {
      ...state,
      fetching: false,
      posts: action.posts
    };

  case postsConstants.GET_POSTS_FAILURE:
    return {
      ...state,
      fetching: false
    };

  default:
    return state
  }
}