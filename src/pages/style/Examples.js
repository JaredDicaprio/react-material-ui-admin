import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dynamicStyles from '../../style';

const Examples = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const [state, setState] = React.useState(true);
  const { t } = useTranslation();

  const handleChange = () => {
    setState(!state);
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={12} md={3} xs={12} align="center">
        <MyStyled.ButtonPrimary variant="contained">
          {t('ui.primary')}
        </MyStyled.ButtonPrimary>
        <br />
        <MyStyled.ButtonSecondary variant="contained">
          {t('ui.secondary')}
        </MyStyled.ButtonSecondary>
        <br />
        <MyStyled.ButtonError variant="contained">
          {t('ui.error')}
        </MyStyled.ButtonError>
        <br />
        <MyStyled.ButtonWarning variant="contained">
          {t('ui.warning')}
        </MyStyled.ButtonWarning>
        <br />
        <MyStyled.ButtonInfo variant="contained">
          {t('ui.info')}
        </MyStyled.ButtonInfo>
        <br />
        <MyStyled.ButtonSuccess variant="contained">
          {t('ui.success')}
        </MyStyled.ButtonSuccess>
        <br />
        <MyStyled.ButtonAccent variant="contained">
          {t('ui.accent')}
        </MyStyled.ButtonAccent>
        <br />
        <MyStyled.ButtonNeutral variant="contained">
          {t('ui.neutral')}
        </MyStyled.ButtonNeutral>
        <br />
      </Grid>
      <Grid item sm={12} md={2} xs={12} align="center">
        <MyStyled.SwitchPrimary checked={state} onChange={handleChange} />
        <br />
        <MyStyled.SwitchSecondary checked={state} onChange={handleChange} />
        <br />
        <MyStyled.SwitchError checked={state} onChange={handleChange} />
        <br />
        <MyStyled.SwitchWarning checked={state} onChange={handleChange} />
        <br />
        <MyStyled.SwitchInfo checked={state} onChange={handleChange} />
        <br />
        <MyStyled.SwitchSuccess checked={state} onChange={handleChange} />
        <br />
        <MyStyled.SwitchAccent checked={state} onChange={handleChange} />
        <br />
        <MyStyled.SwitchNeutral checked={state} onChange={handleChange} />
      </Grid>
      <Grid item sm={12} md={4} xs={12} align="center">
        <MyStyled.AlertPrimary variant="outlined">
          This is a primary outlined Alert
        </MyStyled.AlertPrimary>
        <MyStyled.AlertSecondary variant="outlined">
          This is a secondary outlined Alert
        </MyStyled.AlertSecondary>
        <MyStyled.AlertError variant="outlined">
          This is a error outlined Alert
        </MyStyled.AlertError>
        <MyStyled.AlertWarning variant="outlined">
          This is a warning outlined Alert
        </MyStyled.AlertWarning>
        <MyStyled.AlertInfo variant="outlined">
          This is a info outlined Alert
        </MyStyled.AlertInfo>
        <MyStyled.AlertSuccess variant="outlined">
          This is a success outlined Alert
        </MyStyled.AlertSuccess>
        <MyStyled.AlertAccent variant="outlined">
          This is a accent outlined Alert
        </MyStyled.AlertAccent>
        <MyStyled.AlertNeutral variant="outlined">
          This is a neutral outlined Alert
        </MyStyled.AlertNeutral>
      </Grid>
      <Grid item sm={12} md={3} xs={12} align="center">
        <MyStyled.AlertPrimary variant="filled">
          This is a primary filled Alert
        </MyStyled.AlertPrimary>
        <MyStyled.AlertSecondary variant="filled">
          This is a secondary filled Alert
        </MyStyled.AlertSecondary>
        <MyStyled.AlertError variant="filled">
          This is a error filled Alert
        </MyStyled.AlertError>
        <MyStyled.AlertWarning variant="filled">
          This is a warning filled Alert
        </MyStyled.AlertWarning>
        <MyStyled.AlertInfo variant="filled">
          This is a info filled Alert
        </MyStyled.AlertInfo>
        <MyStyled.AlertSuccess variant="filled">
          This is a success filled Alert
        </MyStyled.AlertSuccess>
        <MyStyled.AlertAccent variant="filled">
          This is a accent filled Alert
        </MyStyled.AlertAccent>
        <MyStyled.AlertNeutral variant="filled">
          This is a neutral filled Alert
        </MyStyled.AlertNeutral>
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

export default connect(mapStateToProps)(Examples);
