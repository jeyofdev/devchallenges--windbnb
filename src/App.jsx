import React, { useContext } from 'react';
import { RoomsContext } from './contexts/RoomsContext';
import Header from './components/Ui/Header/Header';
import RoomsList from './containers/Rooms/RoomsList';
import Footer from './components/Ui/Footer/Footer';
import Modal from './containers/Modal/Modal';
import './App.css';

const App = () => {
    const { modalIsShow } = useContext(RoomsContext);

    return (
        <div className="App">
            <div className="container">
                <Header />
                <RoomsList />
                <Footer />
                <Modal isShow={modalIsShow} />
            </div>
        </div>
    );
};

export default App;
