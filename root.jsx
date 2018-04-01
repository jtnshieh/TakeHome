import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import Header from './frontend/header';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<App/>, root);
});
