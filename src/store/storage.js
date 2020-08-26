import { storage } from '../config';

export const loadState = () => {
  try {
    const serializedState = storage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState).app;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    storage.setItem('state', serializedState);
  } catch (err) {
    // ignore
  }
};
