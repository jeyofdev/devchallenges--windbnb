import React from 'react';
import ReactDOM from 'react-dom';
import RoomsContextProvider from './contexts/RoomsContext';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <RoomsContextProvider>
            <App />
        </RoomsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
