import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { lorem } from '../../api/data';

const GridsOthers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className={classes.card1}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem
              </Typography>
              <Typography
                className={classes.text}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {lorem}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.card2}>
            <CardContent>
              <Typography
                className={classes.text}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {lorem.slice(0, 70)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.card3}>
            <CardContent>
              <Typography
                className={classes.text}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {lorem.slice(0, 40)}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card3}>
            <CardContent>
              <Typography
                className={classes.text}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {lorem.slice(0, 40)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.card4}>
            <CardContent>
              <Typography
                className={classes.text}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {lorem.slice(0, 90)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card5}>
            <CardContent>
              <Typography
                className={classes.text}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {lorem.slice(0, 100)}
              </Typography>
            </CardContent>
          </Card>
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
  text: {
    color: '#fff',
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: theme.spacing(1),
    color: '#fff',
  },
  card1: {
    backgroundColor: '#9c27b0',
  },
  card2: {
    backgroundColor: '#3f51b5',
  },
  card3: {
    backgroundColor: '#e57373',
    marginBottom: theme.spacing(2),
  },
  card4: {
    backgroundColor: '#81c784',
  },
  card5: {
    backgroundColor: '#64b5f6',
  },
}));

export default GridsOthers;
