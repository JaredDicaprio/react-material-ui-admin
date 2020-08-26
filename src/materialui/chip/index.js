import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Basic from './Basic';
import Outlined from './Outlined';
import Complex from './Complex';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const ChipApp = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'materialui', 'chip']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} xs={12}>
          <Basic />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <Outlined />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <Complex />
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

export default connect('', mapDispatchToProps)(ChipApp);
