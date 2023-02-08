import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRocketItem from './ProfileRocketItem';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  return (
    <div className="container">
      <div className="profilediv" id="flex">
        <div className="<joinedmissions">
          <h1>My Missions</h1>
        </div>
        <div className="<resrockets">
          <h1>My rockets</h1>

          {rockets.filter((item) => item.reserved === true).length === 0 ? (
            <h2>No rockets reserved</h2>)
            : (
              <ul className="rocketlist" id="flex">
                {rockets.filter((item) => item.reserved === true).map((rocket) => {
                  const {
                    name, id,
                  } = rocket;

                  return (
                    <ProfileRocketItem
                      key={id}
                      name={name}
                    />
                  );
                })}
              </ul>
            )}

        </div>
      </div>
    </div>

  );
};

export default MyProfile;
