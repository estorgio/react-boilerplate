import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import './styles.css';
import routes from './routes';

const App = () => {
  return (
    <Router history={browserHistory} routes={routes} />
  );
};

ReactDOM.render(<App/>, document.querySelector('#app'));