import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import dynamicStyles from '../../style';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const Documentation = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const state = {
    navbar: props.navbarShow,
  };

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'documentation']);
  }, [props]);

  const info = () => (
    <div>
      <MyStyled.ButtonPrimary
        variant="contained"
        className={classes.space}
        href="https://github.com/dedzec/react-material-ui-admin/blob/master/README.md"
        target="_blank"
      >
        Documentation
      </MyStyled.ButtonPrimary>
      <MyStyled.ButtonPrimary
        variant="contained"
        href="https://github.com/dedzec/react-material-ui-admin"
        target="_blank"
      >
        GitHub Repository
      </MyStyled.ButtonPrimary>
    </div>
  );

  return matches === true ? (
    <Grid
      container
      className={clsx(classes.root, {
        [classes.rootShift]: state.navbar,
      })}
    >
      <Grid item sm={12} md={12} lg={12} align="center">
        {info()}
      </Grid>
    </Grid>
  ) : (
    <Grid container className={classes.rootMobile}>
      <Grid item sm={12} md={12} lg={12} align="center">
        {info()}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'calc(100% + 16px)',
    margin: '-8px',
    overflow: 'hidden',
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  rootMobile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'calc(80% + 16px)',
    margin: '-8px',
    overflow: 'hidden',
    position: 'fixed',
  },
  rootShift: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'calc(80% + 16px)',
    margin: '-8px',
    overflow: 'hidden',
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  space: {
    marginRight: '5px',
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
  navbarShow: state.navbarShow,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Documentation);
