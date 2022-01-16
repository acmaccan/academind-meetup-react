import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavContextProvider } from './store/fav-context';

ReactDOM.render(
  <FavContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavContextProvider>,
  document.getElementById('root')
);