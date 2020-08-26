import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dynamicStyles from '../../style';

const Inputs = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container className={classes.root}>
      <Grid item sm={12} md={4} xs={12} align="center">
        <MyStyled.TextFieldPrimary label={t('ui.fist')} />
        <MyStyled.TextFieldPrimary label={t('ui.last')} />
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

export default connect(mapStateToProps)(Inputs);
