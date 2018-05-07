import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from '../../components/Header';
import Routes from '../../components/Routes';
import Footer from '../../components/Footer';
import store from '../../store';
import './main.scss';


export default class RootPage extends Component {
  render() {
    return (
      <Provider key={ module.hot ? Date.now() : store} store={store}>
        <Router>
          <div >
            <Header />
            <Routes />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}