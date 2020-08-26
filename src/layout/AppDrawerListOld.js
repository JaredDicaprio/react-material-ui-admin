import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Collapse from '@material-ui/core/Collapse';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import constants from '../router/constants';
import { NAVBAR_SHOW } from '../store/actions/actionTypes';

const AppDrawerList = (props) => {
  const classes = useStyles();
  const routers = constants;
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);

  const listOpen = [
    [open1, setOpen1],
    [open2, setOpen2],
    [open3, setOpen3],
    [open4, setOpen4],
    [open5, setOpen5],
    [open6, setOpen6],
    [open7, setOpen7],
    [open8, setOpen8],
    [open9, setOpen9],
    [open10, setOpen10],
  ];

  const listWeb = (router, classList) => (
    <ListItem button className={classList}>
      {router.icon ? (
        <ListItemIcon className={classes.icon}>{router.icon}</ListItemIcon>
      ) : (
        ''
      )}
      <ListItemText
        primary={
          <Typography className={classes.name}>
            {router.parent
              ? t(`${router.parent}.${router.name}`)
              : t(router.name)}
          </Typography>
        }
      />
    </ListItem>
  );

  const listMobile = (router, classList) => (
    <ListItem
      button
      className={classList}
      onClick={() => props.onToggleNavbarShow()}
    >
      {router.icon ? (
        <ListItemIcon className={classes.icon}>{router.icon}</ListItemIcon>
      ) : (
        ''
      )}
      <ListItemText
        primary={
          <Typography className={classes.name}>
            {router.parent
              ? t(`${router.parent}.${router.name}`)
              : t(router.name)}
          </Typography>
        }
      />
    </ListItem>
  );

  return routers.map((router, index) =>
    router.children ? (
      <div key={index}>
        <ListItem
          button
          onClick={() => {
            listOpen[index][1](!listOpen[index][0]);
          }}
        >
          <ListItemIcon className={classes.icon}>{router.icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.name}>{t(router.name)}</Typography>
            }
          />
          {listOpen[index][0] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listOpen[index][0]} timeout="auto" unmountOnExit>
          {router.children.map((routerChildren, i) => (
            <Link
              key={`${index}${i}`}
              // key={routerChildren.id}
              to={`${routerChildren.path}`}
              component={RouterLink}
              color="inherit"
              underline="none"
            >
              <div className={classes.nested}>
                {matches === true
                  ? location.pathname === routerChildren.path
                    ? listWeb(routerChildren, classes.selectedList)
                    : listWeb(routerChildren, classes.list)
                  : location.pathname === routerChildren.path
                  ? listMobile(routerChildren, classes.selectedList)
                  : listMobile(routerChildren, classes.list)}
              </div>
            </Link>
          ))}
        </Collapse>
      </div>
    ) : (
      <Link
        key={index}
        // key={router.id}
        to={`${router.path}`}
        component={RouterLink}
        color="inherit"
        underline="none"
      >
        {matches === true
          ? location.pathname === router.path
            ? listWeb(router, classes.selectedList)
            : listWeb(router, classes.list)
          : location.pathname === router.path
          ? listMobile(router, classes.selectedList)
          : listMobile(router, classes.list)}
      </Link>
    )
  );
};

const useStyles = makeStyles((theme) => ({
  list: {
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
  },
  selectedList: {
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  name: {
    fontWeight: 'bold',
  },
  icon: {
    color: '#fff',
  },
}));

const mapDispatchToProps = (dispatch) => ({
  onToggleNavbarShow: () => dispatch({ type: NAVBAR_SHOW }),
});

export default connect(null, mapDispatchToProps)(AppDrawerList);
