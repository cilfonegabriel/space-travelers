import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItems from './MissionItems';
import { getMissionsApi } from '../../Redux/missions/Mission';

let flag = false;
const MissionLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (flag === false) {
      dispatch(getMissionsApi());
      flag = true;
    }
  }, []);

  const missions = useSelector((state) => state.Missions);

  return (
    <div className="profileContainer">
      <table className="table">
        <tr>
          <th className="missionHead">Mission</th>
          <th className="missionHead">Description</th>
          <th className="missionHead">Status</th>
          <th className="missionHead">Action</th>
        </tr>
        {missions.map((mission) => {
          const {
            id, name, description, joined,
          } = mission;

          return (

            <MissionItems
              key="mission"
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

export default MissionLists;
