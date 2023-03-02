import 'bulma/css/bulma.css';
import './styles.css';
import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const el = document.getElementById('root');
const root = createRoot(el);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);