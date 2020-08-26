import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

const Basic = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Basic Usage"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h1" component="h2" gutterBottom>
              h1. Heading
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="button" display="block" gutterBottom>
              button text
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="caption" display="block" gutterBottom>
              caption text
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="overline" display="block" gutterBottom>
              overline text
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: theme.spacing(1, 2),
    borderBottom: '1px solid #e0e0e0',
  },
}));

export default Basic;
