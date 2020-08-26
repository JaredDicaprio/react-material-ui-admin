import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import dynamicStyles from '../../style';

const Buttons = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container className={classes.root}>
      <Grid item sm={12} md={12} xs={12} align="center">
        <Button variant="contained">{t('ui.default')}</Button>
        <MyStyled.ButtonPrimary variant="contained">
          {t('ui.primary')}
        </MyStyled.ButtonPrimary>
        <MyStyled.ButtonSecondary variant="contained">
          {t('ui.secondary')}
        </MyStyled.ButtonSecondary>
        <MyStyled.ButtonError variant="contained">
          {t('ui.error')}
        </MyStyled.ButtonError>
        <MyStyled.ButtonWarning variant="contained">
          {t('ui.warning')}
        </MyStyled.ButtonWarning>
        <MyStyled.ButtonInfo variant="contained">
          {t('ui.info')}
        </MyStyled.ButtonInfo>
        <MyStyled.ButtonSuccess variant="contained">
          {t('ui.success')}
        </MyStyled.ButtonSuccess>
        <MyStyled.ButtonAccent variant="contained">
          {t('ui.accent')}
        </MyStyled.ButtonAccent>
        <MyStyled.ButtonNeutral variant="contained">
          {t('ui.neutral')}
        </MyStyled.ButtonNeutral>
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
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(Buttons);
