import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Circular from './Circular';
import CircularIndeterminate from './CircularIndeterminate';
import CircularLabel from './CircularLabel';
import Linear from './Linear';
import LinearIndeterminate from './LinearIndeterminate';
import LinearLabel from './LinearLabel';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const ProgressApp = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'materialui', 'progress']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} xs={12}>
          <Circular />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <Linear />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <CircularIndeterminate />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <LinearIndeterminate />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <CircularLabel />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <LinearLabel />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
}));

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect('', mapDispatchToProps)(ProgressApp);
