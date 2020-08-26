import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const AppToTopFab = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  window.onscroll = () => {
    if (window.scrollY > 150) {
      setChecked(() => true);
    } else {
      setChecked(() => false);
    }
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const scrollToTop = (scrollDuration) => {
    let scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) window.scrollBy(0, scrollStep);
        else clearInterval(scrollInterval);
      }, 15);
  };

  const toTop = () => {
    scrollToTop(300);
  };

  return (
    <Zoom
      in={checked}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${checked === true ? transitionDuration.exit : 0}ms`,
      }}
      unmountOnExit
    >
      <Fab
        className={classes.fab}
        aria-label="Settings"
        color="secondary"
        onClick={toTop}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default AppToTopFab;
