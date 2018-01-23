import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Form from './components/form';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/form" component={Form} />
        </div>
    </BrowserRouter>
, document.getElementById('root'));


