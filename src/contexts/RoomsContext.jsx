import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import stays from '../datas/stays.json';

export const RoomsContext = createContext();

const RoomsContextProvider = ({ children }) => {
    const [rooms] = useState(stays);

    return (
        <RoomsContext.Provider value={{ rooms }}>
            {children}
        </RoomsContext.Provider>
    );
};

RoomsContextProvider.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default RoomsContextProvider;
