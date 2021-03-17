import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import stays from '../datas/stays.json';

export const RoomsContext = createContext();

const RoomsContextProvider = ({ children }) => {
    const [rooms] = useState(stays);
    const [modalIsShow, setModalIsShow] = useState(false);
    const [filters, setFilters] = useState({
        location: '',
        guest: {
            adults: 0,
            childrens: 0,
        },
    });

    const displayModal = () => {
        setModalIsShow(!modalIsShow);
    };

    const updateFilters = (name, value) => {
        setFilters({ ...filters, [name]: value });
    };

    const updateFilterGuest = (name, increment = false, decrement = false) => {
        if (increment && !decrement) {
            setFilters({
                ...filters,
                guest: {
                    ...filters.guest,
                    [name]: filters.guest[name] + 1,
                },
            });
        } else if (!increment && decrement && filters.guest[name] > 0) {
            setFilters({
                ...filters,
                guest: {
                    ...filters.guest,
                    [name]: filters.guest[name] - 1,
                },
            });
        }
    };

    return (
        <RoomsContext.Provider
            value={{
                rooms,
                modalIsShow,
                displayModal,
                filters,
                updateFilters,
                updateFilterGuest,
            }}
        >
            {children}
        </RoomsContext.Provider>
    );
};

RoomsContextProvider.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default RoomsContextProvider;
