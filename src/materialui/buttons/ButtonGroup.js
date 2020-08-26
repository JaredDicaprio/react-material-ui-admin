import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import dynamicStyles from '../../style';

const ButtonGroup = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Button Group"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Normal
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <MyStyled.ButtonGroupInfo>
              <MyStyled.Button>One</MyStyled.Button>
              <MyStyled.Button>Two</MyStyled.Button>
              <MyStyled.Button>Three</MyStyled.Button>
            </MyStyled.ButtonGroupInfo>
          </Grid>
          <Grid item xs={12} align="center">
            <MyStyled.ButtonGroupAccent variant="contained">
              <MyStyled.Button>One</MyStyled.Button>
              <MyStyled.Button>Two</MyStyled.Button>
              <MyStyled.Button>Three</MyStyled.Button>
            </MyStyled.ButtonGroupAccent>
          </Grid>
          <Grid item xs={12} align="center">
            <MyStyled.ButtonGroupWarning variant="text">
              <MyStyled.Button>One</MyStyled.Button>
              <MyStyled.Button>Two</MyStyled.Button>
              <MyStyled.Button>Three</MyStyled.Button>
            </MyStyled.ButtonGroupWarning>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Orientation Vertical
            </Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <MyStyled.ButtonGroupInfo orientation="vertical">
              <MyStyled.Button>One</MyStyled.Button>
              <MyStyled.Button>Two</MyStyled.Button>
              <MyStyled.Button>Three</MyStyled.Button>
            </MyStyled.ButtonGroupInfo>
          </Grid>
          <Grid item xs={4} align="center">
            <MyStyled.ButtonGroupAccent
              orientation="vertical"
              variant="contained"
            >
              <MyStyled.Button>One</MyStyled.Button>
              <MyStyled.Button>Two</MyStyled.Button>
              <MyStyled.Button>Three</MyStyled.Button>
            </MyStyled.ButtonGroupAccent>
          </Grid>
          <Grid item xs={4} align="center">
            <MyStyled.ButtonGroupWarning orientation="vertical" variant="text">
              <MyStyled.Button>One</MyStyled.Button>
              <MyStyled.Button>Two</MyStyled.Button>
              <MyStyled.Button>Three</MyStyled.Button>
            </MyStyled.ButtonGroupWarning>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
    borderBottom: '1px solid #e0e0e0',
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(ButtonGroup);
