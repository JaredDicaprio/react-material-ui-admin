import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Basic from './Basic';
import Contained from './Contained';
import Outlined from './Outlined';
import FabButton from './FabButton';
import Loading from './Loading';
import IconButtons from './IconButtons';
import ButtonGroup from './ButtonGroup';
import ToogleButtons from './ToogleButtons';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const ButtonsApp = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'materialui', 'buttons']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4} xs={12}>
          <Basic />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Contained />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Outlined />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <FabButton />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Loading />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <IconButtons />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <ButtonGroup />
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
          <ToogleButtons />
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

export default connect('', mapDispatchToProps)(ButtonsApp);
