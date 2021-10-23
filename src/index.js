import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//render to index.html by root id
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
