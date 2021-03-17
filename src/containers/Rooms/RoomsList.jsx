import React, { useContext } from 'react';
import { RoomsContext } from '../../contexts/RoomsContext';
import Room from '../../components/Room/Room';
import classes from './RoomsList.module.css';

const RoomsList = () => {
    const { rooms } = useContext(RoomsContext);

    return (
        <div className={classes.rooms_list}>
            <div className={classes.header}>
                {rooms.length > 0 ? (
                    <>
                        <h1>Stays in Finland</h1>
                        <p className={classes.total}>{rooms.length}+ stays</p>
                    </>
                ) : (
                    <h1>No results</h1>
                )}
            </div>

            {rooms.map((room) => (
                <Room
                    key={room.id}
                    photo={room.photo}
                    title={room.title}
                    superHost={room.superHost}
                    type={room.type}
                    rating={room.rating}
                />
            ))}
        </div>
    );
};

export default RoomsList;
