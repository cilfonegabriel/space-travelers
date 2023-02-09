import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMision } from '../../Redux/missions/Mission';

const MissionItems = (props) => {
  const {
    id, name, description, joined,
  } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(JoinMision(id));
  };

  return (
    <tr>
      <td className="tablename">{name}</td>
      <td className="tabledescription">{description}</td>
      <td className="tablespan">
        <span className={joined ? 'Activemember' : 'notamember'}>
          {joined ? 'Active Member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td className="tablebutton">
        <button type="button" id={id} onClick={onClick} className={joined ? 'Leavemission' : 'Joinmission'}>
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>

    </tr>

  );
};

export default MissionItems;

MissionItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};