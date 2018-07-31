import React from 'react';
import ReactDOM from 'react-dom';
import ReviewModule from './ReviewModule.jsx';

const id = Number(window.location.pathname.slice(1, window.location.pathname.length - 1));

ReactDOM.render(<ReviewModule id={id} />, document.getElementById('Burke'));
