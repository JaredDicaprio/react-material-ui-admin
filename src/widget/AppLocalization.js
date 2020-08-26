import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';

import { LOCALE } from '../store/actions/actionTypes';

const AppLocalization = (props) => {
  const classes = useStyles();
  const toolbarDense = props.toolbarDense;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { i18n } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleLocale = (locale) => {
    handleClose();
    i18n.changeLanguage(locale, (err /*, t*/) => {
      if (err) return console.log('something went wrong loading', err);
      //t('key'); // -> same as i18next.t
      props.onToggleLocale(locale);
    });
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu-locale"
        onClick={handleClick}
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        className={toolbarDense === true ? classes.rootDense : classes.root}
        id="menu-locale"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => toggleLocale('en')}>English</MenuItem>
        <MenuItem onClick={() => toggleLocale('pt')}>Português</MenuItem>
        <MenuItem onClick={() => toggleLocale('es')}>Español</MenuItem>
      </Menu>
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
  toolbarDense: state.toolbarDense,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleLocale: (locale) => dispatch({ type: LOCALE, locale: locale }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLocalization);
