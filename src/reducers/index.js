import { combineReducers } from 'redux';
import postsReducer from './posts';

const appReducer = combineReducers({
  postsReducer
})

export default appReducer