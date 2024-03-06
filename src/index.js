import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import FetchGiphy from './FetchGiphy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchGiphy />
  </React.StrictMode>
);

