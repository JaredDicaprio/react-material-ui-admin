import React from 'react';
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
import NotificationsIcon from '@material-ui/icons/Notifications';
import AlarmIcon from '@material-ui/icons/Alarm';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FolderIcon from '@material-ui/icons/Folder';

const AppNotification = (props) => {
  const classes = useStyles();
  const toolbarDense = props.toolbarDense;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleNotificationMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      className={toolbarDense === true ? classes.rootDense : classes.root}
      anchorEl={anchorEl}
      id="notification-menu"
      keepMounted
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Typography variant="inherit">Notifications</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Photo" secondary="Mai 23, 2020" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Recipes" secondary="Jun 11, 2020" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Work" secondary="Jul 7, 2020" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Avatar style={{ backgroundColor: 'rgb(33, 150, 243)' }}>
            <ChatBubbleIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Vacation itinerary" secondary="Jul 12, 2020" />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
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

  return (
    <div>
      <IconButton
        onClick={handleNotificationMenuOpen}
        edge="start"
        color="inherit"
      >
        <NotificationsIcon />
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
    paddingRight: 250,
  },
}));

const mapStateToProps = (state) => ({
  toolbarDense: state.toolbarDense,
});

export default connect(mapStateToProps)(AppNotification);
