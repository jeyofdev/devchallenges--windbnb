import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RoomsContext } from '../../contexts/RoomsContext';
import classes from './Modal.module.css';

const Modal = ({ isShow }) => {
    const {
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
            setShowOption({
                ...showOption,
                [e.target.name]: !showOption[e.target.name],
            });
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
                                <GrClose className={classes.icon} />
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
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button
                                        type="button"
                                        onClick={(e) =>
                                            handleShowOptions(e, 'location')
                                        }
                                    >
                                        Helsinki, Finland
                                    </button>
                                </div>
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button
                                        type="button"
                                        onClick={(e) =>
                                            handleShowOptions(e, 'location')
                                        }
                                    >
                                        Turku, Finland
                                    </button>
                                </div>
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button
                                        type="button"
                                        onClick={(e) =>
                                            handleShowOptions(e, 'location')
                                        }
                                    >
                                        Oulu, Finland
                                    </button>
                                </div>
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button
                                        type="button"
                                        onClick={(e) =>
                                            handleShowOptions(e, 'location')
                                        }
                                    >
                                        Vaasa, Finland
                                    </button>
                                </div>
                            </div>

                            <div
                                className={`${classes.guest_options}${
                                    !showOption.guest ? ' hide' : ''
                                }`}
                            >
                                <div className={classes.option}>
                                    <h4>
                                        Adults{' '}
                                        <span className={classes.subtitle}>
                                            Ages 13 or above
                                        </span>
                                    </h4>

                                    <div className={classes.option_value}>
                                        <button
                                            type="button"
                                            className={classes.btn_option}
                                            onClick={() =>
                                                updateFilterGuest(
                                                    'adults',
                                                    false,
                                                    true
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <p className={classes.content}>
                                            {filters.guest.adults}
                                        </p>
                                        <button
                                            type="button"
                                            className={classes.btn_option}
                                            onClick={() =>
                                                updateFilterGuest(
                                                    'adults',
                                                    true
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className={classes.option}>
                                    <h4>
                                        Childrens{' '}
                                        <span className={classes.subtitle}>
                                            Ages 2-12
                                        </span>
                                    </h4>

                                    <div className={classes.option_value}>
                                        <button
                                            type="button"
                                            className={classes.btn_option}
                                            onClick={() =>
                                                updateFilterGuest(
                                                    'childrens',
                                                    false,
                                                    true
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <p className={classes.content}>
                                            {filters.guest.childrens}
                                        </p>
                                        <button
                                            type="button"
                                            className={classes.btn_option}
                                            onClick={() =>
                                                updateFilterGuest(
                                                    'childrens',
                                                    true
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
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
