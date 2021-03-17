import React from 'react';
import RoomsList from './containers/Rooms/RoomsList';
import Footer from './components/Ui/Footer/Footer';
import './App.css';
import Header from './components/Ui/Header/Header';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <RoomsList />
                <Footer />
            </div>
        </div>
    );
};

export default App;
