import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Footer} from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div>
          <App />
          <Footer/>
      </div>
  </React.StrictMode>,
document.getElementById('root')
);

