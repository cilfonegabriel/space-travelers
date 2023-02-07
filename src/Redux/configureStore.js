import { configureStore } from '@reduxjs/toolkit';

import rocketsReducer from './rockets/Rocket';

const rootReducer = {
  Rockets: rocketsReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
