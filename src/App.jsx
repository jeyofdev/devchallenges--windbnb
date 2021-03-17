import React from 'react';
import RoomsList from './containers/Rooms/RoomsList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <RoomsList />
            </div>
        </div>
    );
};

export default App;
