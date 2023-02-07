import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const RocketsList = () => {
  const rockets = useSelector((state) => state.Rockets);

  return (
    <div className="container">
      <ul className="rocketlist" id="flex">
        {rockets.map((rocket) => {
          const {
            id, name, description, flickrImage, reserved,
          } = rocket;

          return (

            <RocketItem
              key={id}
              id={id}
              name={name}
              description={description}
              flickrImage={flickrImage}
              reserved={reserved}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RocketsList;
