import { userAdmin, userEditor } from '../../api/data';
import { USER_LOGIN, USER_LOGOUT } from '../actions/actionTypes';

const userInfo = (state = '', action) => {
  let user = {};
  switch (action.type) {
    case USER_LOGIN:
      if (
        userEditor.email === action.email &&
        userEditor.password === action.password
      ) {
        user = userEditor;
      } else if (
        userAdmin.email === action.email &&
        userAdmin.password === action.password
      ) {
        user = userAdmin;
      }
      console.log(user);
      return user;
    case USER_LOGOUT:
      return '';
    default:
      return state;
  }
};

const user = {
  userInfo,
};

export default user;
