const packageJson = require('../package.json');

module.exports = {
  title: packageJson.name,
  version: packageJson.version,
  /**
   * @type {String} 'localStorage' | 'sessionStorage'
   * @description Storage for user settings and sessions.
   */
  storage: localStorage,
  drawerWidth: 240,
  settings: {
    locale: 'en',
    style: 0,
    dark: false,
    dense: false,
    footer: false,
    navbar: {
      show: true,
      dense: false,
      header: true,
    },
    fullscreen: {
      show: false,
      btn: true,
    },
    settingsPanel: {
      show: false,
      btn: true,
    },
  },
};
