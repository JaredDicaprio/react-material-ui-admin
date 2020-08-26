import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppMain from './layout';
import Loginv1 from './pages/auth/Loginv1';

const App = (props) => {
  const user = props.userInfo;

  return (
    <div>
      {user !== null && user !== '' && user !== undefined ? (
        <BrowserRouter>
          <AppMain />
        </BrowserRouter>
      ) : (
        <Loginv1 />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(App);
