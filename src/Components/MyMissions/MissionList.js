import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import { getApiMission } from '../../Redux/missions/Mission';
import store from '../../Redux/configureStore';

let flag = false;
const MissionList = () => {
  useEffect(() => {
    if (!flag) {
      store.dispatch(getApiMission());
      flag = true;
    }
  }, []);

  const missions = useSelector((state) => state.Missions);

  return (
    <div className="profileContainer">
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-Lax">Mission</th>
            <th className="tg-Lax">Description</th>
            <th className="tg-Lax">Status</th>
            <th className="tg-Lax" aria-label="empty" />
          </tr>
        </thead>
        {missions.map((mission) => {
          const {
            id, name, description, joined,
          } = mission;

          return (

            <MissionItem
              key={id}
              id={id}
              name={name}
              description={description}
              joined={joined}
            />
          );
        })}
      </table>
    </div>
  );
};

export default MissionList;
