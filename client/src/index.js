import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CaseStore from './store/CaseStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={
    {
      user: new UserStore(),
      casest: new CaseStore(),
    }
  }>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);