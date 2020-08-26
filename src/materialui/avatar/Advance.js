import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import PersonIcon from '@material-ui/icons/Person';
import dynamicStyles from '../../style';

const Advance = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Advance Usage"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4} align="center">
            <AvatarGroup max={4}>
              <MyStyled.AvatarPrimary>A</MyStyled.AvatarPrimary>
              <MyStyled.AvatarSecondary>B</MyStyled.AvatarSecondary>
              <MyStyled.AvatarError>C</MyStyled.AvatarError>
              <MyStyled.AvatarWarning>D</MyStyled.AvatarWarning>
              <MyStyled.AvatarSuccess>E</MyStyled.AvatarSuccess>
            </AvatarGroup>
          </Grid>
          <Grid item xs={4} align="center">
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <MyStyled.AvatarPrimary>
                <PersonIcon />
              </MyStyled.AvatarPrimary>
            </StyledBadge>
          </Grid>
          <Grid item xs={4} align="center">
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={
                <SmallAvatar>
                  <PersonIcon />
                </SmallAvatar>
              }
            >
              <MyStyled.AvatarSecondary src="https://avatars3.githubusercontent.com/u/43690181" />
            </Badge>
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

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(Advance);
