import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Github from './Github';
import Line from './Line';
import Raddar from './Raddar';
import Pie from './Pie';
import Bar from './Bar';
import Project from './Project';
import Order from './Order';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const Dashboard = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Github />
      <Grid container spacing={1}>
        <Grid item sm={12} md={12} xs={12}>
          <Line />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Raddar />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Pie />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Bar />
        </Grid>
        <Grid item sm={12} md={7} xs={12}>
          <Project />
        </Grid>
        <Grid item sm={12} md={5} xs={12}>
          <Order />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
