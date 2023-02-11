import { useEffect } from 'react';
import { getApiRockets } from '../Redux/rockets/Rocket';
import store from '../Redux/configureStore';
import RocketsList from '../Components/MyRockets/RocketsList';

let flag = false;
const Rockets = () => {
  useEffect(() => {
    if (!flag) {
      store.dispatch(getApiRockets());
      flag = true;
    }
  });
  return (
    <RocketsList />
  );
};

export default Rockets;
