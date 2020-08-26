import React from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppToolbar from './AppToolbar';
import AppDrawer from './AppDrawer';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppSetting from './AppSetting';
import AppSettingFab from './AppSettingFab';
import AppToTopFab from './AppToTopFab';

const AppMain = (props) => {
  const state = {
    footerShow: props.footerShow,
    dynamicTheme: props.dynamicTheme,
    darkTheme: props.darkTheme,
  };

  const theme = createMuiTheme({
    palette: {
      type: state.darkTheme === true ? 'dark' : 'light',
    },
  });

  //console.log(theme);

  return (
    <div className={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppToolbar />
        <AppDrawer />
        <AppContent />
        <AppSetting />
        <AppSettingFab />
        {state.footerShow === true ? (
          <div style={{ marginTop: theme.spacing(20) }}>
            <AppFooter />
          </div>
        ) : (
          ''
        )}
        <AppToTopFab />
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  footerShow: state.footerShow,
  darkTheme: state.darkTheme,
});

export default connect(mapStateToProps)(AppMain);
