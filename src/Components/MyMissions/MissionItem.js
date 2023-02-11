import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMision, LeaveMision } from '../../Redux/missions/Mission';

const MissionItem = (props) => {
  const {
    id, name, description, joined,
  } = props;

  const dispatch = useDispatch();

  const onClickJoin = () => {
    dispatch(JoinMision(id));
  };

  const onClickLeave = () => {
    dispatch(LeaveMision(id));
  };

  return (
    <tbody>
      <tr>
        <td className="tableName">{name}</td>
        <td className="tableDescription">{description}</td>
        <td className="tableSpan">
          {joined
            ? <span className="ActiveMember">Active Member</span>
            : <span className="notaMember">NOT A MEMBER</span>}
        </td>
        <td className="tableButton">
          {joined
            ? (
              <button
                type="button"
                id={id}
                onClick={onClickLeave}
                className="LeaveMission"
              >
                Leave Mission
              </button>
            )
            : <button type="button" id={id} onClick={onClickJoin} className="JoinMission">Join Mission</button> }
        </td>

      </tr>
    </tbody>
  );
};

export default MissionItem;

MissionItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  joined: PropTypes.bool,
};

MissionItem.defaultProps = {
  id: '',
  name: '',
  description: '',
  joined: false,
};
