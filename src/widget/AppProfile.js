import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { SETTINGS_PANEL_SHOW, USER_LOGOUT } from '../store/actions/actionTypes';

const AppProfile = (props) => {
  const classes = useStyles();
  const user = props.userInfo;
  const toolbarDense = props.toolbarDense;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleSettingsPanel = () => {
    props.onToggleSettingsPanel();
    handleMenuClose();
  };

  const toggleUserLogout = async () => {
    // await toggleSettingsPanel;
    handleMenuClose();
    props.onToggleUserLogout();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      className={toolbarDense === true ? classes.rootDense : classes.root}
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
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
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <Typography variant="inherit">Profile</Typography>
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
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        size="small"
      >
        <Avatar alt="Remy Sharp" src={user.avatar} />
      </IconButton>
      {renderMenu}
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
}));

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  toolbarDense: state.toolbarDense,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleSettingsPanel: () => dispatch({ type: SETTINGS_PANEL_SHOW }),
  onToggleUserLogout: () => dispatch({ type: USER_LOGOUT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppProfile);
