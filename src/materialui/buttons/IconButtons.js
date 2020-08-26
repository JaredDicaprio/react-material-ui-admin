import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import AlarmIcon from '@material-ui/icons/Alarm';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import dynamicStyles from '../../style';

const IconButtons = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Icon Button"
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
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonSecondary>
              <AlarmIcon />
            </MyStyled.IconButtonSecondary>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonPrimary>
              <StarIcon />
            </MyStyled.IconButtonPrimary>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonSuccess>
              <LiveTvIcon />
            </MyStyled.IconButtonSuccess>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonAccent>
              <FlashOnIcon />
            </MyStyled.IconButtonAccent>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Disable
            </Typography>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonSecondary disabled>
              <AlarmIcon />
            </MyStyled.IconButtonSecondary>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonPrimary disabled>
              <StarIcon />
            </MyStyled.IconButtonPrimary>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonSuccess disabled>
              <LiveTvIcon />
            </MyStyled.IconButtonSuccess>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.IconButtonAccent disabled>
              <FlashOnIcon />
            </MyStyled.IconButtonAccent>
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

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(IconButtons);
