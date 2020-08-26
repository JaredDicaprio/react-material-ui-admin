import { createStore } from 'redux';
import { Reducers } from './reducers';
import { saveState, loadState } from './storage';

export const store = createStore(Reducers, loadState());

store.subscribe(() => {
  saveState({
    app: store.getState(),
  });
});
