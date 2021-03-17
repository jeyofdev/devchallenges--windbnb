import React from 'react';
import ReactDOM from 'react-dom';
import RoomsContextProvider from './contexts/RoomsContext';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <RoomsContextProvider>
            <App />
        </RoomsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
