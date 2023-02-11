import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRocketItem from './ProfileRocketItem';
import ProfileMissionItems from './ProfileMissionItems';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const missions = useSelector((state) => state.Missions);
  const joinedMissions = missions.filter((item) => item.joined === true);
  const reservedRockets = rockets.filter((item) => item.reserved === true);

  return (
    <div className="profileContainer">
      <div className="profileContent" id="flex">
        <div className="<joinedMissionsSection">
          <h2>My Missions</h2>
          {joinedMissions.length === 0 ? (
            <h3>No Missions Joined</h3>)
            : (
              <ul className="missionList" id="flex">
                {joinedMissions.map((mission) => {
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
        <div className="<reservedRocketsSection">
          <h2>My rockets</h2>
          {reservedRockets.length === 0 ? (
            <h3>No rockets reserved</h3>)
            : (
              <ul className="rocketList" id="flex">
                {reservedRockets.map((rocket) => {
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
