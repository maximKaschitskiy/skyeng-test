import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import './styles/normalize.css';
import './styles/fonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
