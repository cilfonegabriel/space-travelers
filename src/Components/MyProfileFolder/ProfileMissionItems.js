import React from 'react';
import PropTypes from 'prop-types';

const ProfileMissionItems = (props) => {
  const {
    name,
  } = props;

  return (
    <li className="profileMissionItems" id="flex">
      <h2>{name}</h2>
    </li>

  );
};

export default ProfileMissionItems;

ProfileMissionItems.propTypes = {
  name: PropTypes.string.isRequired,
};
