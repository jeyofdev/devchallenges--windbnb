import React, { useContext } from 'react';
import { RoomsContext } from '../../contexts/RoomsContext';
import Room from '../../components/Room/Room';

const RoomsList = () => {
    const { rooms } = useContext(RoomsContext);

    return (
        <div className="rooms_list">
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
