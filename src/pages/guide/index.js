import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Joyride, { CallBackProps, STATUS } from 'react-joyride';
import dynamicStyles from '../../style';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const Guide = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const { t } = useTranslation();
  const [visible, setVisible] = React.useState(false);
  const state = {
    navbar: props.navbarShow,
    initialStep: 0,
    steps: [
      {
        content: <h2>{t('guidedesc.content')}</h2>,
        locale: {
          skip: <strong aria-label="skip">{t('guidedesc.skip')}</strong>,
        },
        placement: 'center',
        target: 'body',
      },
    ],
  };

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'guide']);
  }, [props]);

  const initIntroJs = () => {
    setVisible(true);
  };

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setVisible(false);
    }

    // tslint:disable:no-console
    console.groupCollapsed(type);
    console.log(data);
    console.groupEnd();
    // tslint:enable:no-console
  };

  return (
    <Grid
      container
      className={clsx(classes.root, {
        [classes.rootShift]: state.navbar,
      })}
    >
      <Grid item sm={12} md={12} lg={12} align="center">
        <p className="text">
          {t('guidedesc.description')}{' '}
          <a href="https://react-joyride.com/">React Joyride</a>
        </p>
        <MyStyled.ButtonSuccess
          className="button"
          variant="contained"
          onClick={initIntroJs}
        >
          {t('guidedesc.button')}
        </MyStyled.ButtonSuccess>
        <Joyride
          callback={handleJoyrideCallback}
          run={visible}
          steps={state.steps}
          continuous={true}
          scrollToFirstStep={true}
          showProgress={true}
          showSkipButton={true}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'calc(100% + 16px)',
    margin: '-8px',
    overflow: 'hidden',
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  rootShift: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'calc(80% + 16px)',
    margin: '-8px',
    overflow: 'hidden',
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
  navbarShow: state.navbarShow,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Guide);
