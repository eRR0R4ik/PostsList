import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import ContentPage from '../../containers/ContentPage';
import About from '../About';
import Contact from '../Contact';


const Routes = () => {
  return (
    <div>
      <Redirect from="/" to="posts" />
      <Route exact path="/posts" component={ContentPage}/>
      <Route path="/about" component={About}/>
      <Route path="/contacts" component={Contact}/>
    </div>
  );
}

export default Routes;