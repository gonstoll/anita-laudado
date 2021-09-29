import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import SctoGroteskAWoff from './assets/fonts/Scto_Grotesk_A.woff';
import SctoGroteskAWoff2 from './assets/fonts/Scto_Grotesk_A.woff2';
import SctoGroteskAWoffBold from './assets/fonts/Scto_Grotesk_A_Bold.woff';
import SctoGroteskAWoffBold2 from './assets/fonts/Scto_Grotesk_A_Bold.woff2';

/** Hack to avoid multiple calls to loaded font */
const loadFonts = () => {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.innerHTML = `
    @font-face {
      font-family: 'Scto Grotesk A';
      font-weight: 400;
      font-display: block;
      src: local('Scto Grotesk A'), local('Scto Grotesk A'),
          url(${SctoGroteskAWoff}) format('woff'),
          url(${SctoGroteskAWoff2}) format('woff2');
    }
    @font-face {
      font-family: 'Scto Grotesk A';
      font-weight: 700;
      font-display: block;
      src: local('Scto Grotesk A'), local('Scto Grotesk A'),
          url(${SctoGroteskAWoffBold}) format('woff'),
          url(${SctoGroteskAWoffBold2}) format('woff2');
    }
  `;
  head.appendChild(style);
};

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'), loadFonts);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
