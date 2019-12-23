import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react';
import './font-awesome-icons';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
)