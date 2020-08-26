import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailIcon from '@material-ui/icons/Mail';
import dynamicStyles from '../../style';

const Align = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Align Usage"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3} align="center">
            <MyStyled.BadgeInfo
              badgeContent={9}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MailIcon />
            </MyStyled.BadgeInfo>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.BadgeInfo
              badgeContent={9}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <MailIcon />
            </MyStyled.BadgeInfo>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.BadgeInfo
              badgeContent={9}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <MailIcon />
            </MyStyled.BadgeInfo>
          </Grid>
          <Grid item xs={3} align="center">
            <MyStyled.BadgeInfo
              badgeContent={9}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MailIcon />
            </MyStyled.BadgeInfo>
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

export default connect(mapStateToProps)(Align);
