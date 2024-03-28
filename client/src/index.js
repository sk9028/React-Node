import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // App.js도 import해주고 여기서도 import 필수

import { Provider } from 'react-redux';
import 'antd/dist/antd.css'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)


const root = ReactDOM.createRoot(document.getElementById('root'));
// <BrowserRouter> 이걸로 안감싸주면 최신 버전에서 라우터 기능이 적용되지 않음.
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={createStoreWithMiddleware(Reducer,
          // REDUX_DEVTOOLS 확장 프로그램 연결
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);