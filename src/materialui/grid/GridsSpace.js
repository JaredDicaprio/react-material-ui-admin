import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dynamicStyles from '../../style';

const GridsSpace = (props) => {
  const Mystyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" spacing={2}>
        <Grid item xs={2}>
          <Mystyled.PaperPrimary className={classes.paper}>
            One
          </Mystyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <Mystyled.PaperNeutral className={classes.paper}>
            two
          </Mystyled.PaperNeutral>
        </Grid>
        <Grid item xs={2}>
          <Mystyled.PaperPrimary className={classes.paper}>
            three
          </Mystyled.PaperPrimary>
        </Grid>
      </Grid>
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={2}>
          <Mystyled.PaperPrimary className={classes.paper}>
            One
          </Mystyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <Mystyled.PaperNeutral className={classes.paper}>
            two
          </Mystyled.PaperNeutral>
        </Grid>
        <Grid item xs={2}>
          <Mystyled.PaperPrimary className={classes.paper}>
            three
          </Mystyled.PaperPrimary>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={2}>
          <Mystyled.PaperPrimary className={classes.paper}>
            One
          </Mystyled.PaperPrimary>
        </Grid>
        <Grid item xs={2}>
          <Mystyled.PaperNeutral className={classes.paper}>
            two
          </Mystyled.PaperNeutral>
        </Grid>
        <Grid item xs={2}>
          <Mystyled.PaperPrimary className={classes.paper}>
            three
          </Mystyled.PaperPrimary>
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

export default connect(mapStateToProps)(GridsSpace);
