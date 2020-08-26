import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dynamicStyles from '../../style';

const Grids = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyStyled.PaperPrimary className={classes.paper}>
            12
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={6}>
          <MyStyled.PaperNeutral className={classes.paper}>
            6
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={6}>
          <MyStyled.PaperNeutral className={classes.paper}>
            6
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={4}>
          <MyStyled.PaperPrimary className={classes.paper}>
            4
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={4}>
          <MyStyled.PaperPrimary className={classes.paper}>
            4
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={4}>
          <MyStyled.PaperPrimary className={classes.paper}>
            4
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={3}>
          <MyStyled.PaperNeutral className={classes.paper}>
            3
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={3}>
          <MyStyled.PaperNeutral className={classes.paper}>
            3
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={3}>
          <MyStyled.PaperNeutral className={classes.paper}>
            3
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={3}>
          <MyStyled.PaperNeutral className={classes.paper}>
            3
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={2}>
          <MyStyled.PaperPrimary className={classes.paper}>
            2
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <MyStyled.PaperPrimary className={classes.paper}>
            2
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <MyStyled.PaperPrimary className={classes.paper}>
            2
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <MyStyled.PaperPrimary className={classes.paper}>
            2
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <MyStyled.PaperPrimary className={classes.paper}>
            2
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <MyStyled.PaperPrimary className={classes.paper}>
            2
          </MyStyled.PaperPrimary>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
        <Grid item xs={1}>
          <MyStyled.PaperNeutral className={classes.paper}>
            1
          </MyStyled.PaperNeutral>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(Grids);
