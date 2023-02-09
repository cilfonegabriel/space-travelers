import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRocketItem from './ProfileRocketItem';
import ProfileMissionItems from './ProfileMissionItems';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const missions = useSelector((state) => state.Missions);

  return (
    <div className="profileContainer">
      <div className="profileContent" id="flex">
        <div className="joinedMissionsSection">
          <h1>My Missions</h1>
          {missions.filter((item) => item.joined === true).length === 0 ? (
            <h2>No Missions Joined</h2>)
            : (
              <ul className="missionList" id="flex">
                {missions.filter((item) => item.joined === true).map((mission) => {
                  const {
                    name, id,
                  } = mission;

                  return (
                    <ProfileMissionItems
                      key={id}
                      name={name}
                    />
                  );
                })}
              </ul>
            )}

        </div>
        <div className="reservedRocketsSection">
          <h1>My rockets</h1>

          {rockets.filter((item) => item.reserved === true).length === 0 ? (
            <h2>No rockets reserved</h2>)
            : (
              <ul className="rocketList" id="flex">
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
