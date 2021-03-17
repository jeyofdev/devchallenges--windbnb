import React from 'react';
import PropTypes from 'prop-types';
import { GoStar } from 'react-icons/go';
import classes from './Room.module.css';

const Room = ({ photo, title, superHost, type, rating }) => {
    return (
        <div className={classes.room}>
            <div className={classes.room_img}>
                <img src={photo} className={classes.card_img_top} alt={title} />
            </div>
            <div className={classes.room_body}>
                <div className={classes.room_content}>
                    <div className={classes.room_content_left}>
                        {superHost && (
                            <span className={classes.room_host}>
                                Super host
                            </span>
                        )}
                        <p className={classes.room_type}>{type}</p>
                    </div>
                    <div className={classes.room_content_right}>
                        <GoStar className={classes.room_rating_icon} />
                        <p className={classes.room_rating}>{rating}</p>
                    </div>
                </div>
                <h5 className={classes.room_title}>{title}</h5>
            </div>
        </div>
    );
};

Room.propTypes = {
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    superHost: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

export default Room;
