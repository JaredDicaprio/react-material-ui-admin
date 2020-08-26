import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import dynamicStyles from '../../style';

const Basic = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
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
          <Grid item xs={2} align="center">
            <MyStyled.AvatarPrimary>
              <PersonIcon />
            </MyStyled.AvatarPrimary>
          </Grid>
          <Grid item xs={2} align="center">
            <MyStyled.AvatarSecondary src="https://avatars3.githubusercontent.com/u/43690181" />
          </Grid>
          <Grid item xs={2} align="center">
            <MyStyled.BadgeInfo badgeContent={5}>
              <MyStyled.AvatarPrimary>
                <NotificationsIcon />
              </MyStyled.AvatarPrimary>
            </MyStyled.BadgeInfo>
          </Grid>
          <Grid item xs={2} align="center">
            <MyStyled.AvatarSuccess>S</MyStyled.AvatarSuccess>
          </Grid>
          <Grid item xs={2} align="center">
            <MyStyled.AvatarError variant="rounded">E</MyStyled.AvatarError>
          </Grid>
          <Grid item xs={2} align="center">
            <MyStyled.AvatarInfo variant="square">I</MyStyled.AvatarInfo>
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

export default connect(mapStateToProps)(Basic);
