
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import  "react-icons/fa";
import Table from './components/Table';
import axios from 'axios';
import Income from './components/IncomeTable/Income';




if (document.getElementById('exampleApp')) {
    ReactDOM.render(<App />, document.getElementById('exampleApp'));
}

if (document.getElementById('exampleTable')) {
    ReactDOM.render(<Table />, document.getElementById('exampleTable'));
}

if (document.getElementById('income')) {
    ReactDOM.render(<Income />, document.getElementById('income'));
}