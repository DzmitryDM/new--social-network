import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
//import store from './redux/store';
import store from './app/store';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<BrowserRouter >
  <React.StrictMode>
<Provider store={store}>
      <App />
</Provider>
  </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
