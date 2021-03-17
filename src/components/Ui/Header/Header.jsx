import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import logoImg from '../../../assets/images/logo.svg';
import classes from './Header.module.css';

const Header = () => {
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
                />
                <input
                    type="text"
                    className={classes.input_text_guest}
                    placeholder="Add guests"
                />
                <button type="button">
                    <BiSearchAlt2 className={classes.icon} />
                </button>
            </div>
        </header>
    );
};

export default Header;
