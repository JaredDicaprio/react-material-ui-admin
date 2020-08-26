import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';

import AppBreadcrumbs from '../widget/AppBreadcrumbs';
import AppFullScreen from '../widget/AppFullScreen';
import AppNotification from '../widget/AppNotification';
import AppLocalization from '../widget/AppLocalization';
import AppProfile from '../widget/AppProfile';
import AppMore from '../widget/AppMore';
import { drawerWidth } from '../config';
import { NAVBAR_SHOW } from '../store/actions/actionTypes';

const AppToolbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const state = {
    navbar: props.navbarShow,
    dense: props.toolbarDense,
  };

  // The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed
  document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 960) {
      if (state.navbar !== false) {
        props.onToggleNavbarShow();
      }
    } else {
      if (state.navbar !== true) {
        props.onToggleNavbarShow();
      }
    }
  });

  // The resize event fires when the document view (window) has been resized.
  window.onresize = () => {
    if (window.innerWidth < 960) {
      if (state.navbar !== false) {
        props.onToggleNavbarShow();
      }
    } else {
      if (state.navbar !== true) {
        props.onToggleNavbarShow();
      }
    }
  };

  const menuIcon = (
    <IconButton
      onClick={() => props.onToggleNavbarShow()}
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      {state.navbar === true ? (
        <FormatIndentIncreaseIcon />
      ) : (
        <FormatIndentDecreaseIcon />
      )}
    </IconButton>
  );

  const toolbar = (dense) => (
    <Toolbar variant={dense} className="toolbar">
      {menuIcon}
      <AppBreadcrumbs />
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <AppFullScreen />
        <AppNotification />
        <AppLocalization />
        <AppProfile />
      </div>
      <div className={classes.sectionMobile}>
        <AppMore />
      </div>
    </Toolbar>
  );

  return matches === true ? (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: state.navbar,
      })}
    >
      {state.dense === true ? toolbar('dense') : toolbar('regular')}
    </AppBar>
  ) : (
    <AppBar position="fixed" className={classes.appBarMobile}>
      {state.dense === true ? toolbar('dense') : toolbar('regular')}
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.action.active,
  },
  appBarMobile: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.action.active,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const mapStateToProps = (state) => ({
  navbarShow: state.navbarShow,
  toolbarDense: state.toolbarDense,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleNavbarShow: () => dispatch({ type: NAVBAR_SHOW }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppToolbar);
