import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './redux/store/store';
import 'flowbite';
import 'remixicon/fonts/remixicon.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
// import load from './assets/images/ripple.svg';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <div className="flex justify-center items-center h-full w-full">
        <img src={load} alt="something" className="mt-52" />
      </div> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
