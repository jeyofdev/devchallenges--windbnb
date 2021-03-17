import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import stays from '../datas/stays.json';

export const RoomsContext = createContext();

const RoomsContextProvider = ({ children }) => {
    const [allRooms] = useState(stays);
    const [rooms, setRooms] = useState(allRooms);
    const [modalIsShow, setModalIsShow] = useState(false);
    const [filters, setFilters] = useState({
        location: '',
        guest: {
            adults: 0,
            childrens: 0,
        },
    });

    const totalGuests = () => {
        const total = filters.guest.adults + filters.guest.childrens;
        return total > 0 ? total : '';
    };

    const updateRooms = () => {
        if (filters.location !== '') {
            const params = [...filters.location.split(', '), totalGuests()];

            const filteredRooms = stays.filter(
                (room) =>
                    room.city === params[0] &&
                    room.country === params[1] &&
                    room.maxGuests >= params[2]
            );
            setRooms(filteredRooms);
        } else {
            setRooms(stays);
        }
    };

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
                allRooms,
                rooms,
                updateRooms,
                modalIsShow,
                displayModal,
                filters,
                updateFilters,
                updateFilterGuest,
                totalGuests,
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
