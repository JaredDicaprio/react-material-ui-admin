import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import AppDrawerList from './AppDrawerList';
import { drawerWidth } from '../config';
import { NAVBAR_SHOW } from '../store/actions/actionTypes';

const AppDrawer = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const title = props.titleApp;
  const state = {
    navbar: props.navbarShow,
    dense: props.navbarDense,
    header: props.navbarHeader,
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer}>
      {matches === true ? (
        <Drawer
          variant="persistent"
          anchor="left"
          open={state.navbar}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {state.header === true ? (
            <div>
              <div className={classes.drawerHeader}>
                <Link to="/" component={RouterLink} color="inherit">
                  <Typography variant="h6" noWrap>
                    {title}
                  </Typography>
                </Link>
              </div>
              <Divider />
            </div>
          ) : (
            ''
          )}
          {state.dense === true ? (
            <div>
              <List dense>
                <AppDrawerList />
              </List>
              <Divider />
            </div>
          ) : (
            <div>
              <List>
                <AppDrawerList />
              </List>
              <Divider />
            </div>
          )}
        </Drawer>
      ) : (
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={state.navbar}
            onClose={() => props.onToggleNavbarShow()}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {state.header === true ? (
              <div>
                <div className={classes.drawerHeader}>
                  <Link to="/" component={RouterLink} color="inherit">
                    <Typography
                      variant="h6"
                      onClick={() => props.onToggleNavbarShow()}
                      noWrap
                    >
                      {title}
                    </Typography>
                  </Link>
                </div>
                <Divider />
              </div>
            ) : (
              ''
            )}
            {state.dense === true ? (
              <div>
                <List dense>
                  <AppDrawerList />
                </List>
                <Divider />
              </div>
            ) : (
              <div>
                <List>
                  <AppDrawerList />
                </List>
                <Divider />
              </div>
            )}
          </Drawer>
        </Hidden>
      )}
    </nav>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#333',
    color: '#fff',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    boxShadow: theme.shadows[4],
    /*boxShadow: `0px 2px 4px -1px rgb(0,0,0,0.2),
      0px 4px 5px 0px rgba(0,0,0,0.14),
      0px 1px 10px 0px rgba(0,0,0,0.12);
    `,*/
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const mapStateToProps = (state) => ({
  titleApp: state.titleApp,
  navbarShow: state.navbarShow,
  navbarDense: state.navbarDense,
  navbarHeader: state.navbarHeader,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleNavbarShow: () => dispatch({ type: NAVBAR_SHOW }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
