import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import dynamicStyles from '../../style';

import { DYNAMIC_STYLE } from '../../store/actions/actionTypes';

const DynamicStyles = (props) => {
  const myStyles = dynamicStyles;
  const classes = useStyles();

  return (
    <div>
      {myStyles.map((MyStyle, index) => {
        if (index === props.dynamicStyle) {
          return (
            <div key={index} className={classes.root}>
              <Card square elevation={5}>
                <CardContent className={classes.contentIndex}>
                  <MyStyle.BgPrimary align="center" className={classes.text}>
                    primary
                  </MyStyle.BgPrimary>
                  <MyStyle.BgSecondary align="center" className={classes.text}>
                    secondary
                  </MyStyle.BgSecondary>
                  <MyStyle.BgError align="center" className={classes.text}>
                    error
                  </MyStyle.BgError>
                  <MyStyle.BgWarning align="center" className={classes.text}>
                    warning
                  </MyStyle.BgWarning>
                  <MyStyle.BgInfo align="center" className={classes.text}>
                    info
                  </MyStyle.BgInfo>
                  <MyStyle.BgSuccess align="center" className={classes.text}>
                    success
                  </MyStyle.BgSuccess>
                  <MyStyle.BgAccent align="center" className={classes.text}>
                    accent
                  </MyStyle.BgAccent>
                  <MyStyle.BgNeutral align="center" className={classes.text}>
                    neutral
                  </MyStyle.BgNeutral>
                </CardContent>
              </Card>
            </div>
          );
        } else {
          return (
            <div key={index} className={classes.root}>
              <Card
                square
                elevation={0}
                onClick={() => props.onToggleDynamicStyle(index)}
              >
                <CardContent className={classes.content}>
                  <MyStyle.BgPrimary align="center" className={classes.text}>
                    primary
                  </MyStyle.BgPrimary>
                  <MyStyle.BgSecondary align="center" className={classes.text}>
                    secondary
                  </MyStyle.BgSecondary>
                  <MyStyle.BgError align="center" className={classes.text}>
                    error
                  </MyStyle.BgError>
                  <MyStyle.BgWarning align="center" className={classes.text}>
                    warning
                  </MyStyle.BgWarning>
                  <MyStyle.BgInfo align="center" className={classes.text}>
                    info
                  </MyStyle.BgInfo>
                  <MyStyle.BgSuccess align="center" className={classes.text}>
                    success
                  </MyStyle.BgSuccess>
                  <MyStyle.BgAccent align="center" className={classes.text}>
                    accent
                  </MyStyle.BgAccent>
                  <MyStyle.BgNeutral align="center" className={classes.text}>
                    neutral
                  </MyStyle.BgNeutral>
                </CardContent>
              </Card>
            </div>
          );
        }
      })}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(11),
      height: theme.spacing(20),
    },
  },
  contentIndex: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(1),
  },
  text: {
    fontSize: 12,
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicStyle: (index) =>
    dispatch({ type: DYNAMIC_STYLE, index: index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DynamicStyles);
