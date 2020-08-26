import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

const Basic = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Basic
            </Typography>
            <Typography variant="body2" component="p">
              Hey there, I am a very simple card. I am good at containing small
              bits of information. I am quite convenient because I require
              little markup to use effectively.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Link
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={12} md={4}>
        <Card className={classes.cardColorPupler}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Basic card with `purple` background
            </Typography>
            <Typography variant="body2" component="p">
              Hey there, I am a very simple card. I am good at containing small
              bits of information. I am quite convenient because I require
              little markup to use effectively.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.colorButtonLink}
              size="small"
              variant="contained"
            >
              Link
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={12} md={4}>
        <Card className={classes.cardColorTeal}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Basic card with `teal` background
            </Typography>
            <Typography variant="body2" component="p">
              Hey there, I am a very simple card. I am good at containing small
              bits of information. I am quite convenient because I require
              little markup to use effectively.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.colorButtonLink}
              size="small"
              variant="contained"
            >
              Link
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
  },
  cardColorPupler: {
    minWidth: 275,
    color: '#fff',
    backgroundColor: '#9c27b0',
  },
  cardColorTeal: {
    minWidth: 275,
    color: '#fff',
    backgroundColor: '#009688',
  },
  colorButtonLink: {
    color: '#fff',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
}));

export default Basic;
