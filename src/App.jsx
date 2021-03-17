import React from 'react';
import RoomsList from './containers/Rooms/RoomsList';
import Footer from './components/Ui/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <RoomsList />
                <Footer />
            </div>
        </div>
    );
};

export default App;
