import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveRocket } from '../../Redux/rockets/Rocket';

const RocketItem = (props) => {
  const {
    id, name, description, flickrImage, reserved,
  } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(ReserveRocket(id));
  };

  return (
    <div>
      <li className="rocketItem" id="flex">
        <img src={flickrImage} alt="Girl in a jacket" width="250" height="250" />
        <div className="rocketRight" id="flex">
          <h2>{name}</h2>
          <div className="spanText" id="flex">
            <span className={reserved ? 'active' : 'inactive'}>
              reserved
            </span>
            <p>{description}</p>
          </div>
          <button type="button" id={id} onClick={onClick} className={reserved ? 'reserve' : 'cancel'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </li>
    </div>
  );
};


export default RocketItem;

RocketItem.propTypes = {
id: PropTypes.string,
name: PropTypes.string,
description: PropTypes.string,
reserved: PropTypes.bool,
flickrImage: PropTypes.string,
};

RocketItem.defaultProps = {
id: '',
name: '',
description: '',
reserved: false,
flickrImage: '',
};
