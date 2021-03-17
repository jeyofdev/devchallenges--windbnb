import React from 'react';
import PropTypes from 'prop-types';
import classes from './GuestOption.module.css';

const GuestOption = ({ title, subtitle, value, increment, decrement }) => {
    return (
        <div className={classes.guest_option}>
            <h4>
                {title} <span className={classes.subtitle}>{subtitle}</span>
            </h4>

            <div className={classes.option_value}>
                <button
                    type="button"
                    className={classes.btn_option}
                    onClick={() => decrement('adults', false, true)}
                >
                    -
                </button>
                <p className={classes.content}>{value}</p>
                <button
                    type="button"
                    className={classes.btn_option}
                    onClick={() => increment('adults', true)}
                >
                    +
                </button>
            </div>
        </div>
    );
};

GuestOption.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};

export default GuestOption;
