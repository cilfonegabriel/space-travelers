import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/Rocket';
import missionsReducer from './missions/Mission';

const rootReducer = {
  Rockets: rocketsReducer,
  Missions: missionsReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
