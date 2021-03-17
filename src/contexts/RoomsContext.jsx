import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import stays from '../datas/stays.json';

export const RoomsContext = createContext();

const RoomsContextProvider = ({ children }) => {
    const [rooms] = useState(stays);
    const [modalIsShow, setModalIsShow] = useState(false);
    const [filters, setFilters] = useState({
        location: '',
        guest: '',
    });

    const displayModal = () => {
        setModalIsShow(!modalIsShow);
    };

    const updateFilters = (name, value) => {
        setFilters({ ...filters, [name]: value });
    };

    return (
        <RoomsContext.Provider
            value={{ rooms, modalIsShow, displayModal, filters, updateFilters }}
        >
            {children}
        </RoomsContext.Provider>
    );
};

RoomsContextProvider.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default RoomsContextProvider;
