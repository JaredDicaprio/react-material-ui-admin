import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

const Image = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={4}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + '/8.jpg'}
          />
          <CardContent className={classes.content}>
            <Typography className={classes.title} gutterBottom>
              Card with image
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
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + '/n3.jpeg'}
          />
          <CardContent className={classes.content}>
            <Typography className={classes.title} gutterBottom>
              Card with image
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
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + '/n4.jpeg'}
          />
          <CardContent className={classes.content}>
            <Typography className={classes.title} gutterBottom>
              Card with image
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
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    borderBottom: '1px solid #e0e0e0',
  },
  media: {
    height: 200,
  },
}));

export default Image;
