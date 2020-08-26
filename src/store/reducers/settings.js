import { title, version, settings } from '../../config';
import {
  LOCALE,
  TOOLBAR_DENSE,
  DYNAMIC_BREADCRUMBS,
  NAVBAR_SHOW,
  NAVBAR_DENSE,
  NAVBAR_HEADER,
  FULLSCREEN_SHOW,
  FULLSCREEN_BTN,
  SETTINGS_PANEL_SHOW,
  SETTINGS_PANEL_BTN,
  FOOTER_SHOW,
  DYNAMIC_STYLE,
  DARK_THEME,
} from '../actions/actionTypes';

const titleApp = () => {
  const titleApp = title.replace('-', ' ').replace('-', ' ').replace('-', ' ');
  return titleApp
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const versionApp = (state = version) => state;

const locale = (state = settings.locale, action) => {
  switch (action.type) {
    case LOCALE:
      return action.locale;
    default:
      return state;
  }
};

const dynamicBreadcrumbs = (state = '', action) => {
  switch (action.type) {
    case DYNAMIC_BREADCRUMBS:
      return action;
    default:
      return state;
  }
};

const toolbarDense = (state = settings.dense, action) => {
  switch (action.type) {
    case TOOLBAR_DENSE:
      return !state;
    default:
      return state;
  }
};

const navbarShow = (state = settings.navbar.show, action) => {
  switch (action.type) {
    case NAVBAR_SHOW:
      return !state;
    default:
      return state;
  }
};

const navbarDense = (state = settings.navbar.dense, action) => {
  switch (action.type) {
    case NAVBAR_DENSE:
      return !state;
    default:
      return state;
  }
};

const navbarHeader = (state = settings.navbar.header, action) => {
  switch (action.type) {
    case NAVBAR_HEADER:
      return !state;
    default:
      return state;
  }
};

const fullscreenShow = (state = settings.fullscreen.show, action) => {
  switch (action.type) {
    case FULLSCREEN_SHOW:
      return action.show;
    default:
      return state;
  }
};

const fullscreenBtn = (state = settings.fullscreen.btn, action) => {
  switch (action.type) {
    case FULLSCREEN_BTN:
      return !state;
    default:
      return state;
  }
};

const settingsPanelShow = (state = settings.settingsPanel.show, action) => {
  switch (action.type) {
    case SETTINGS_PANEL_SHOW:
      return !state;
    default:
      return state;
  }
};

const settingsPanelBtn = (state = settings.settingsPanel.btn, action) => {
  switch (action.type) {
    case SETTINGS_PANEL_BTN:
      return !state;
    default:
      return state;
  }
};

const footerShow = (state = settings.footer, action) => {
  switch (action.type) {
    case FOOTER_SHOW:
      return !state;
    default:
      return state;
  }
};

const dynamicStyle = (state = settings.style, action) => {
  switch (action.type) {
    case DYNAMIC_STYLE:
      return action.index;
    default:
      return state;
  }
};

const darkTheme = (state = settings.dark, action) => {
  switch (action.type) {
    case DARK_THEME:
      return !state;
    default:
      return state;
  }
};

const setting = {
  titleApp,
  versionApp,
  locale,
  toolbarDense,
  dynamicBreadcrumbs,
  navbarShow,
  navbarDense,
  navbarHeader,
  fullscreenShow,
  fullscreenBtn,
  settingsPanelShow,
  settingsPanelBtn,
  footerShow,
  dynamicStyle,
  darkTheme,
};

export default setting;
