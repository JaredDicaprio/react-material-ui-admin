import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import dynamicStyles from '../../style';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Custom = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Custom Usage"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} align="center">
            <StyledBadge badgeContent={9} color="secondary">
              <PersonIcon />
            </StyledBadge>
          </Grid>
          <Grid item xs={6} align="center">
            <MyStyled.BadgeSuccess badgeContent={<AddIcon />}>
              <NotificationsIcon />
            </MyStyled.BadgeSuccess>
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

export default connect(mapStateToProps)(Custom);
