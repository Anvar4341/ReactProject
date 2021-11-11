import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./css/styles.css";
import Mode from './component/context'

ReactDOM.render(
  <React.StrictMode>
    <Mode>
    <App />
    </Mode>
  </React.StrictMode>,
  document.getElementById('root')
);