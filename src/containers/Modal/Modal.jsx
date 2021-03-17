import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RoomsContext } from '../../contexts/RoomsContext';
import GuestOption from '../../components/Options/GuestOption/GuestOption';
import classes from './Modal.module.css';
import LocationOptionsList from '../LocationOptions/LocationOptionsList';

const Modal = ({ isShow }) => {
    const {
        allRooms,
        displayModal,
        updateRooms,
        filters,
        updateFilters,
        updateFilterGuest,
        totalGuests,
    } = useContext(RoomsContext);

    const [showOption, setShowOption] = useState({
        location: false,
        guest: false,
    });

    const handleShowOptions = (e, name = null) => {
        if (name === null) {
            if (e.target.name === 'location') {
                setShowOption({
                    ...showOption,
                    location: true,
                    guest: false,
                });
            } else if (e.target.name === 'guest') {
                setShowOption({
                    ...showOption,
                    location: false,
                    guest: true,
                });
            }
        } else {
            setShowOption({
                ...showOption,
                [name]: !showOption[name],
            });
            updateFilters(name, e.target.innerText);
        }
    };

    const handleChange = (e) => {
        updateFilters(e.target.name, e.target.value);
    };

    return (
        <>
            {isShow && (
                <div className={classes.modal}>
                    <div className={classes.container}>
                        <div className={classes.modal_header}>
                            <h4>Edit your search</h4>
                            <button type="button">
                                <GrClose
                                    className={classes.icon}
                                    onClick={displayModal}
                                />
                            </button>
                        </div>

                        <div className={classes.filters}>
                            <div className={classes.input_control}>
                                <label htmlFor="location">
                                    Location
                                    <input
                                        type="text"
                                        className={classes.input_text_location}
                                        id="location"
                                        name="location"
                                        placeholder="Select location"
                                        value={filters.location}
                                        onChange={handleChange}
                                        onClick={handleShowOptions}
                                    />
                                </label>
                            </div>
                            <div className={classes.input_control}>
                                <label htmlFor="guest">
                                    Guests
                                    <input
                                        type="text"
                                        id="guest"
                                        name="guest"
                                        className={classes.input_text_guest}
                                        value={totalGuests()}
                                        onChange={() => totalGuests()}
                                        placeholder="Add guests"
                                        onClick={handleShowOptions}
                                    />
                                </label>
                            </div>

                            <div className={classes.input_control}>
                                <button
                                    type="button"
                                    className={classes.btn_search}
                                    onClick={() => {
                                        updateRooms();
                                        displayModal();
                                        setShowOption({
                                            ...showOption,
                                            location: false,
                                            guest: false,
                                        });
                                    }}
                                >
                                    <BiSearchAlt2 className={classes.icon} />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>

                        <div className={classes.options_group}>
                            <div
                                className={`${classes.location_options}${
                                    !showOption.location ? ' hide' : ''
                                }`}
                            >
                                <LocationOptionsList
                                    datas={allRooms}
                                    handleShowOptions={(e) =>
                                        handleShowOptions(e, 'location')
                                    }
                                />
                            </div>

                            <div
                                className={`${classes.guest_options}${
                                    !showOption.guest ? ' hide' : ''
                                }`}
                            >
                                <GuestOption
                                    title="Adults"
                                    subtitle="Ages 13 or above"
                                    value={filters.guest.adults}
                                    increment={() =>
                                        updateFilterGuest('adults', true)
                                    }
                                    decrement={() =>
                                        updateFilterGuest('adults', false, true)
                                    }
                                />

                                <GuestOption
                                    title="Childrens"
                                    subtitle="Ages 2-12"
                                    value={filters.guest.childrens}
                                    increment={() =>
                                        updateFilterGuest('childrens', true)
                                    }
                                    decrement={() =>
                                        updateFilterGuest(
                                            'childrens',
                                            false,
                                            true
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

Modal.propTypes = {
    isShow: PropTypes.bool.isRequired,
};

export default Modal;
