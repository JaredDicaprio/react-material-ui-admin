import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import TranslateIcon from '@material-ui/icons/Translate';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AlarmIcon from '@material-ui/icons/Alarm';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FolderIcon from '@material-ui/icons/Folder';

import { LOCALE } from '../store/actions/actionTypes';

import {
  SETTINGS_PANEL_SHOW,
  USER_LOGOUT,
  FULLSCREEN_SHOW,
} from '../store/actions/actionTypes';

const AppMore = (props) => {
  const classes = useStyles();
  const user = props.userInfo;
  const state = {
    toolbarDense: props.toolbarDense,
    fullscreenShow: props.fullscreenShow,
  };
  const { i18n } = useTranslation();
  const [localeEl, setLocaleEl] = React.useState(null);
  const [notificationEl, setNotificationEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    handleMobileMenuClose();
    setLocaleEl(event.currentTarget);
  };

  const handleClose = () => {
    setLocaleEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event) => {
    handleMobileMenuClose();
    setNotificationEl(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    handleMobileMenuClose();
    setNotificationEl(null);
  };

  const toggleLocale = (locale) => {
    handleClose();
    i18n.changeLanguage(locale, (err /*, t*/) => {
      if (err) return console.log('something went wrong loading', err);
      //t('key'); // -> same as i18next.t
      props.onToggleLocale(locale);
    });
  };

  const toggleSettingsPanel = () => {
    props.onToggleSettingsPanel();
    handleMobileMenuClose();
  };

  const toggleUserLogout = async () => {
    // await toggleSettingsPanel;
    handleMobileMenuClose();
    props.onToggleUserLogout();
  };

  const toggleFullScreen = () => {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
      return props.onToggleFullScreen(true);
    }

    cancelFullScreen.call(doc);
    return props.onToggleFullScreen(false);
  };

  const renderLocaleMenu = (
    <Menu
      className={classes.locales}
      id="menu-locale"
      anchorEl={localeEl}
      keepMounted
      open={Boolean(localeEl)}
      onClose={handleNotificationMenuClose}
    >
      <MenuItem onClick={() => toggleLocale('en')}>English</MenuItem>
      <MenuItem onClick={() => toggleLocale('pt')}>Português</MenuItem>
      <MenuItem onClick={() => toggleLocale('es')}>Español</MenuItem>
    </Menu>
  );

  const renderNotificationMenu = (
    <Menu
      className={classes.notification}
      anchorEl={notificationEl}
      id="notification-menu"
      keepMounted
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(notificationEl)}
      onClose={handleNotificationMenuClose}
    >
      <MenuItem>
        <Typography variant="inherit">Notifications</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleNotificationMenuClose}>
        <ListItemIcon>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Photo" secondary="Mai 23, 2020" />
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuClose}>
        <ListItemIcon>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Recipes" secondary="Jun 11, 2020" />
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuClose}>
        <ListItemIcon>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Work" secondary="Jul 7, 2020" />
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuClose}>
        <ListItemIcon>
          <Avatar style={{ backgroundColor: 'rgb(33, 150, 243)' }}>
            <ChatBubbleIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Vacation itinerary" secondary="Jul 12, 2020" />
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuClose}>
        <ListItemIcon>
          <Avatar style={{ backgroundColor: 'rgb(255, 193, 7)' }}>
            <AlarmIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Kitchen remodel" secondary="Jul 15, 2020" />
      </MenuItem>
      <Divider />
      <MenuItem>
        <Typography variant="inherit">Show All</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      className={state.toolbarDense === true ? classes.rootDense : classes.root}
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ListItemIcon>
          <Avatar alt="Remy Sharp" src={user.avatar} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Fragment>
              <Typography variant="inherit">{user.name}</Typography>
            </Fragment>
          }
          secondary={
            <Fragment>
              <Typography variant="inherit">{user.status}</Typography>
            </Fragment>
          }
        />
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMobileMenuClose}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <Typography variant="inherit">Profile</Typography>
      </MenuItem>

      <MenuItem onClick={handleNotificationMenuOpen}>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <Typography variant="inherit">Notification</Typography>
      </MenuItem>

      <MenuItem onClick={toggleFullScreen}>
        <ListItemIcon>
          {state.fullscreenShow === false ? (
            <FullscreenIcon />
          ) : (
            <FullscreenExitIcon />
          )}
        </ListItemIcon>
        <Typography variant="inherit">FullScreen</Typography>
      </MenuItem>

      <MenuItem onClick={handleClick}>
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <Typography variant="inherit">Translation</Typography>
      </MenuItem>

      <MenuItem onClick={toggleSettingsPanel}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <Typography variant="inherit">Settings</Typography>
      </MenuItem>

      <MenuItem onClick={toggleUserLogout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <Typography variant="inherit">Logout</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      {renderMobileMenu}
      {renderNotificationMenu}
      {renderLocaleMenu}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
  },
  rootDense: {
    marginTop: theme.spacing(5),
  },
  locales: {
    marginTop: theme.spacing(-25),
  },
  notification: {
    marginTop: theme.spacing(-15),
  },
}));

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  fullscreenShow: state.fullscreenShow,
  toolbarDense: state.toolbarDense,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleSettingsPanel: () => dispatch({ type: SETTINGS_PANEL_SHOW }),
  onToggleUserLogout: () => dispatch({ type: USER_LOGOUT }),
  onToggleLocale: (locale) => dispatch({ type: LOCALE, locale: locale }),
  onToggleFullScreen: (action) =>
    dispatch({ type: FULLSCREEN_SHOW, show: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMore);
