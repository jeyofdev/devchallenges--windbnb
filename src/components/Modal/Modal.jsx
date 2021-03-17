import React from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import classes from './Modal.module.css';

const Modal = ({ isShow }) => {
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
                                        placeholder="Helsinki, Finland"
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
                                        placeholder="Add guests"
                                    />
                                </label>
                            </div>

                            <div className={classes.input_control}>
                                <button
                                    type="button"
                                    className={classes.btn_search}
                                >
                                    <BiSearchAlt2 className={classes.icon} />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>

                        <div className={classes.options_group}>
                            <div className={classes.location_options}>
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button type="button">
                                        Helsinki, Finland
                                    </button>
                                </div>
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button type="button">
                                        Turku, Finland
                                    </button>
                                </div>
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button type="button">Oulu, Finland</button>
                                </div>
                                <div className={classes.option}>
                                    <FaMapMarkerAlt className={classes.icon} />
                                    <button type="button">
                                        Vaasa, Finland
                                    </button>
                                </div>
                            </div>

                            <div className={classes.guest_options}>
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
                                        >
                                            -
                                        </button>
                                        <p className={classes.content}>0</p>
                                        <button
                                            type="button"
                                            className={classes.btn_option}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className={classes.option}>
                                    <h4>
                                        Children{' '}
                                        <span className={classes.subtitle}>
                                            Ages 2-12
                                        </span>
                                    </h4>

                                    <div className={classes.option_value}>
                                        <button
                                            type="button"
                                            className={classes.btn_option}
                                        >
                                            -
                                        </button>
                                        <p className={classes.content}>0</p>
                                        <button
                                            type="button"
                                            className={classes.btn_option}
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
