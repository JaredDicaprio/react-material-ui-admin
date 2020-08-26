import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import dynamicStyles from '../style';

import { SETTINGS_PANEL_SHOW } from '../store/actions/actionTypes';

const AppSettingFab = (props) => {
  const classes = useStyles();
  const MyStyle = dynamicStyles[props.dynamicStyle];
  const state = {
    settingsbtn: props.settingsPanelBtn,
  };

  const toggleSettingsPanel = () => {
    props.onToggleSettingsPanel();
  };

  return state.settingsbtn === true ? (
    <MyStyle.FabSecondary
      className={classes.fab}
      aria-label="Settings"
      size="small"
      onClick={toggleSettingsPanel}
    >
      <SettingsIcon className={classes.icon} />
    </MyStyle.FabSecondary>
  ) : (
    ''
  );
};

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    top: theme.spacing(40),
    right: theme.spacing(0),
    borderRadius: 0,
  },
}));

const mapStateToProps = (state) => ({
  settingsPanelShow: state.settingsPanelShow,
  settingsPanelBtn: state.settingsPanelBtn,
  dynamicStyle: state.dynamicStyle,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleSettingsPanel: () => dispatch({ type: SETTINGS_PANEL_SHOW }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSettingFab);
