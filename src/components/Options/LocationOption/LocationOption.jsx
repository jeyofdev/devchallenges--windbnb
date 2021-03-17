import React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import classes from './LocationOption.module.css';

const LocationOption = ({ btnLabel, showOptions }) => {
    return (
        <div className={classes.option}>
            <FaMapMarkerAlt className={classes.icon} />
            <button type="button" onClick={showOptions}>
                {btnLabel}
            </button>
        </div>
    );
};

LocationOption.propTypes = {
    btnLabel: PropTypes.string.isRequired,
    showOptions: PropTypes.func.isRequired,
};

export default LocationOption;
