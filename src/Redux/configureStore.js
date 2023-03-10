import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/Mission';
import rocketsReducer from './rockets/Rocket';

export const rootReducer = {
  Rockets: rocketsReducer,
  Missions: missionsReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
