import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { lorem } from '../../api/data';

const GridsOthersSquare = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className={classes.card1} square>
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
          <Card className={classes.card2} square>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {lorem.slice(0, 40)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.card2} square>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {lorem.slice(0, 40)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.card3} square>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {lorem.slice(0, 90)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card4} square>
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
        <Grid item xs={6}>
          <Card className={classes.card5} square>
            <CardContent>
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
        <Grid item xs={6}>
          <Card className={classes.card6} square>
            <CardContent>
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
  card1: {
    backgroundColor: '#7986cb',
  },
  card2: {
    backgroundColor: '#ffd54f',
  },
  card3: {
    backgroundColor: '#ffb74d',
  },
  card4: {
    backgroundColor: '#e57373',
  },
  card5: {
    backgroundColor: '#607d8d',
  },
  card6: {
    backgroundColor: '#795548',
  },
}));

export default GridsOthersSquare;
