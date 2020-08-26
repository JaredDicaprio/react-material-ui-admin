import React from 'react';
import { connect } from 'react-redux';
import Routes from '../router';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { drawerWidth } from '../config';

const AppContent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const state = {
    navbar: props.navbarShow,
  };

  return matches === true ? (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: state.navbar,
      })}
      id="main"
    >
      <div className={classes.toolbar} />
      <Routes />
    </main>
  ) : (
    <main className={classes.contentMobile} id="main">
      <div className={classes.toolbar} />
      <Routes />
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexGrow: 1,
    ...theme.mixins.toolbar,
  },
  content: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //marginLeft: -drawerWidth,
  },
  contentMobile: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(0, 3),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const mapStateToProps = (state) => ({
  navbarShow: state.navbarShow,
});

export default connect(mapStateToProps)(AppContent);
