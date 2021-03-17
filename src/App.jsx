import React from 'react';
import RoomsList from './containers/Rooms/RoomsList';
import Footer from './components/Ui/Footer/Footer';
import './App.css';
import Header from './components/Ui/Header/Header';
import Modal from './components/Modal/Modal';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <RoomsList />
                <Footer />
                <Modal isShow />
            </div>
        </div>
    );
};

export default App;
