import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Basic from './Basic';
import Image from './Image';
import Music from './Music';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const CardsApp = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'materialui', 'cards']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} xs={12}>
          <h3>Simple</h3>
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <Basic />
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <h3>Image Card</h3>
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <Image />
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <h3>MusicCard</h3>
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Music />
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

export default connect('', mapDispatchToProps)(CardsApp);
