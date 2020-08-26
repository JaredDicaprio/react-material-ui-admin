import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import DeleteIcon from '@material-ui/icons/Delete';

import { drawerWidth } from '../config';

const AppFooter = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const state = {
    navbar: props.navbarShow,
  };

  const card = (
    <Card className={classes.cardFooter}>
      <CardContent>
        <Grid container alignItems="center" justify="center">
          <IconButton className={classes.icon}>
            <HomeIcon />
          </IconButton>
          <IconButton className={classes.icon}>
            <EmailIcon />
          </IconButton>
          <IconButton className={classes.icon}>
            <EventIcon />
          </IconButton>
          <IconButton className={classes.icon}>
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Divider />
        <Grid container alignItems="center" justify="center">
          <Typography className={classes.textFooter}>
            {new Date().getFullYear()} —{' '}
            <strong>React Material-Ui Admin</strong>
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );

  return matches === true ? (
    <div
      className={clsx(classes.footer, {
        [classes.footerShift]: state.navbar,
      })}
    >
      {card}
    </div>
  ) : (
    <div className={classes.footerMobile}>{card}</div>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: theme.spacing(0),
    width: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //marginLeft: -drawerWidth,
  },
  footerMobile: {
    position: 'fixed',
    paddingTop: theme.spacing(10),
    bottom: theme.spacing(0),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  footerShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  cardFooter: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 0,
  },
  icon: {
    color: '#fff',
    padding: theme.spacing(1, 3, 2),
  },
  textFooter: {
    fontSize: 12,
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(-1),
  },
}));

const mapStateToProps = (state) => ({
  navbarShow: state.navbarShow,
});

export default connect(mapStateToProps)(AppFooter);
