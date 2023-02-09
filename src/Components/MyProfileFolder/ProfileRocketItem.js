import React from 'react';
import PropTypes from 'prop-types';

const ProfileRocketItem = (props) => {
  const {
    name,
  } = props;

  return (
    <li className="rocket-item" id="flex">
      <h2>{name}</h2>
    </li>

  );
};

export default ProfileRocketItem;

ProfileRocketItem.propTypes = {
  name: PropTypes.string.isRequired,
};
