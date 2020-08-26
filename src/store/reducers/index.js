import { combineReducers } from 'redux';
import user from './user';
import settings from './settings';

export const Reducers = combineReducers({
  ...user,
  ...settings,
});
