import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import dynamicStyles from '../../style';
import Language from './Language';
import Buttons from './Buttons';
import Inputs from './Inputs';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const I18nApp = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'i18n']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} xs={12}>
          <MyStyled.AlertInfo severity="info" variant="outlined">
            {t('i18ndesc.description')}{' '}
            <a href="https://react.i18next.com/">react-i18next</a>
          </MyStyled.AlertInfo>
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <Language />
          <Divider />
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <Buttons />
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <Inputs />
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

export default connect(mapStateToProps, mapDispatchToProps)(I18nApp);
