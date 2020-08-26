import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dynamicStyles from '../../style';
import ToastEditor from './ToastEditor';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const MarkdownApp = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'components', 'markdown']);
  }, [props]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} xs={12}>
          <MyStyled.AlertInfo severity="info" variant="outlined">
            {t('markdown.description')}{' '}
            <a href="https://github.com/nhn/tui.editor/tree/master/apps/react-editor">
              tui.editor
            </a>
            .
          </MyStyled.AlertInfo>
        </Grid>
        <Grid item sm={12} md={12} xs={12}>
          <ToastEditor />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownApp);
