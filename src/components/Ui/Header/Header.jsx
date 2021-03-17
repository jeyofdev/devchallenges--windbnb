import React, { useContext } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RoomsContext } from '../../../contexts/RoomsContext';
import logoImg from '../../../assets/images/logo.svg';
import classes from './Header.module.css';

const Header = () => {
    const { filters, displayModal, totalGuests } = useContext(RoomsContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logoImg} alt="logo" />
            </div>

            <div className={classes.filters}>
                <input
                    type="text"
                    className={classes.input_text_city}
                    placeholder="Select location"
                    defaultValue={filters.location}
                    onClick={displayModal}
                />
                <input
                    type="text"
                    className={classes.input_text_guest}
                    placeholder="Add guests"
                    defaultValue={totalGuests()}
                    onClick={displayModal}
                />
                <button type="button">
                    <BiSearchAlt2 className={classes.icon} />
                </button>
            </div>
        </header>
    );
};

export default Header;
