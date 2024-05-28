import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value) {
  console.log("Captcha value:", value);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);