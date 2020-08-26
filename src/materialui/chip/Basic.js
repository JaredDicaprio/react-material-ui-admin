import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import dynamicStyles from '../../style';

const Basic = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

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
          <Grid item xs={12} align="center">
            <Chip label="Basic" />
            <Chip label="disabled" disabled />
            <Chip
              avatar={<Avatar>M</Avatar>}
              label="Clickable"
              onClick={handleClick}
            />
            <Chip
              avatar={
                <Avatar
                  alt="Natacha"
                  src="https://avatars3.githubusercontent.com/u/43690181"
                />
              }
              label="Deletable"
              onDelete={handleDelete}
            />
            <MyStyled.ChipPrimary label="Styled Primary" />
            <MyStyled.ChipAccent label="Styled Accent" />
            <MyStyled.ChipNeutral label="Styled Neutral" />
            <MyStyled.ChipSuccess label="Styled Success" />
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
