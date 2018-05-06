import React from 'react';
import { render } from 'react-dom';
import RootPage from './containers/RootPage';
import { AppContainer } from 'react-hot-loader';



const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#mount_place')
  )
}


renderApp(RootPage)


if(module.hot) {
  module.hot.accept('./containers/RootPage/RootPage.jsx', () => { renderApp(RootPage) })
}
