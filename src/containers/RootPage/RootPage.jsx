import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from '../../components/Header';
import ContentPage from '../ContentPage';
import Footer from '../../components/Footer';
import store from '../../store';


export default class RootPage extends Component {
  render() {
    return (
      <Provider key={ module.hot ? Date.now() : store} store={store}>
        <div className="container clearfix">
          <Header />
          <ContentPage />
          <Footer />
        </div>
      </Provider>
    )
  }
}