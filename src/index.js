import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Story } from './Story';
import Cuisine from './Cuisine';
import Team from './Team';
import Visitus from './Visitus';
import Thank from './Thank';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Story />
    <Cuisine />
    <Team />
    <Visitus />
    <Thank />
  </React.StrictMode>
);


