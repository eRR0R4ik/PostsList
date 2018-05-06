import { combineReducers } from 'redux';
import { allPosts } from './posts.reducer';
import { etc } from './test.reducer';


const appReducer = combineReducers({
  allPosts,
  etc
})

export default appReducer;