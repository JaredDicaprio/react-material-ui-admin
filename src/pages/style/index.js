import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import dynamicStyles from '../../style';
import DynamicStyles from './DynamicStyles';
import Examples from './Examples';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const Style = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'style']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12}>
          <MyStyled.AlertInfo severity="info" variant="outlined">
            {t('ui.description')}{' '}
            <a href="https://material-ui.com/guides/typescript/#usage-of-withstyles">
              withStyles
            </a>
            {', '}
            <a href="https://styled-components.com/">Styled Components</a>
          </MyStyled.AlertInfo>
        </Grid>
        <Grid item sm={12} md={12} xs={12} align="center">
          <DynamicStyles />
          <Divider />
        </Grid>
        <Grid item sm={12} md={12} xs={12} align="center">
          <Examples />
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

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Style);
