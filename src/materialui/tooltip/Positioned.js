import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Positioned = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Positioned Usage"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container justify="center">
          <Grid item>
            <Tooltip title="Add" placement="top-start">
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top">
              <Button>top</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top-end">
              <Button>top-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Tooltip title="Add" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column">
            <Grid item>
              <Tooltip title="Add" placement="left-start">
                <Button>left-start</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="left">
                <Button>left</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Tooltip title="Add" placement="bottom-start">
              <Button>bottom-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom-end">
              <Button>bottom-end</Button>
            </Tooltip>
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

export default Positioned;
