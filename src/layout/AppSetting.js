import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Close from '@material-ui/icons/Close';

import { drawerWidth } from '../config';
import {
  TOOLBAR_DENSE,
  NAVBAR_DENSE,
  NAVBAR_HEADER,
  FULLSCREEN_BTN,
  SETTINGS_PANEL_SHOW,
  SETTINGS_PANEL_BTN,
  FOOTER_SHOW,
  DARK_THEME,
} from '../store/actions/actionTypes';
import dynamicStyles from '../style';
import DynamicStyles from '../pages/style/DynamicStyles';

const AppSetting = (props) => {
  const classes = useStyles();
  const MyStyle = dynamicStyles[props.dynamicStyle];
  const version = props.versionApp;
  const { t } = useTranslation();
  const state = {
    settingsPanel: props.settingsPanelShow,
  };

  const settings = [
    {
      name: 'toolbardense',
      onChange: () => props.onToggleToolbarDense(),
      state: props.toolbarDense,
      label:
        props.toolbarDense === true
          ? `${t('settings.toolbarDense')} : on`
          : `${t('settings.toolbarDense')} : off`,
    },
    {
      name: 'navbardense',
      onChange: () => props.onToggleNavbarDense(),
      state: props.navbarDense,
      label:
        props.navbarDense === true
          ? `${t('settings.navbarDense')} : on`
          : `${t('settings.navbarDense')} : off`,
    },
    {
      name: 'navbarheader',
      onChange: () => props.onToggleNavbarHeader(),
      state: props.navbarHeader,
      label:
        props.navbarHeader === true
          ? `${t('settings.navbarHeader')} : on`
          : `${t('settings.navbarHeader')} : off`,
    },
    {
      name: 'fullscreenbtn',
      onChange: () => props.onToggleFullScreenBtn(),
      state: props.fullscreenBtn,
      label:
        props.fullscreenBtn === true
          ? `${t('settings.fullScreenBtn')} : on`
          : `${t('settings.fullScreenBtn')} : off`,
    },
    {
      name: 'settingbtn',
      onChange: () => props.onToggleSettingsBtn(),
      state: props.settingsPanelBtn,
      label:
        props.settingsPanelBtn === true
          ? `${t('settings.settingsBtn')} : on`
          : `${t('settings.settingsBtn')} : off`,
    },
    {
      name: 'footer',
      onChange: () => props.onToggleFooterShow(),
      state: props.footerShow,
      label:
        props.footerShow === true
          ? `${t('settings.footer')} : on`
          : `${t('settings.footer')} : off`,
    },
    {
      name: 'darktheme',
      onChange: () => props.onToggleDarkTheme(),
      state: props.darkTheme,
      label:
        props.darkTheme === true
          ? `${t('settings.dark')} : on`
          : `${t('settings.dark')} : off`,
    },
  ];

  const formSettingsPanel = (
    <FormGroup>
      {settings.map((setting, index) => (
        <FormControlLabel
          key={index}
          control={
            <Switch
              color="primary"
              checked={setting.state}
              onChange={setting.onChange}
              name={setting.name}
            />
          }
          label={setting.label}
        />
      ))}
    </FormGroup>
  );

  return (
    <Hidden xsDown implementation="css">
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={state.settingsPanel}
        onClose={() => props.onToggleSettingsPanel()}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" noWrap>
            {t('settings.title')}
          </Typography>
          <div className={classes.grow} />
          <MyStyle.FabSecondary
            aria-label="Close"
            size="small"
            onClick={() => props.onToggleSettingsPanel()}
          >
            <Close />
          </MyStyle.FabSecondary>
        </div>

        <Divider />
        <div className={classes.drawerSubHeader}>
          <Typography noWrap className={classes.text}>
            {t('settings.version')}: {version}
          </Typography>
        </div>
        <Divider />

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.text}>
              {t('settings.position')}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{formSettingsPanel}</ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.text}>
              {t('settings.style')}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DynamicStyles />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Drawer>
    </Hidden>
  );
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  drawerSubHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    // necessary for content to be below app bar
  },
  text: {
    fontSize: '0.77rem',
  },
}));

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleToolbarDense: () => dispatch({ type: TOOLBAR_DENSE }),
  onToggleNavbarDense: () => dispatch({ type: NAVBAR_DENSE }),
  onToggleNavbarHeader: () => dispatch({ type: NAVBAR_HEADER }),
  onToggleSettingsPanel: () => dispatch({ type: SETTINGS_PANEL_SHOW }),
  onToggleFullScreenBtn: () => dispatch({ type: FULLSCREEN_BTN }),
  onToggleSettingsBtn: () => dispatch({ type: SETTINGS_PANEL_BTN }),
  onToggleFooterShow: () => dispatch({ type: FOOTER_SHOW }),
  onToggleDarkTheme: () => dispatch({ type: DARK_THEME }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSetting);
