import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "locomotive-scroll/dist/locomotive-scroll.css";
import 'react-toastify/dist/ReactToastify.css';

import "./main.scss";

import App from './App';
import Routing from "./Routing";

ReactDOM.render(<Routing />, document.getElementById('root'));

