import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/getgreetings';

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;