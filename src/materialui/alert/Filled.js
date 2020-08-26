import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import dynamicStyles from '../../style';

const Filled = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Filled Alerts"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <MyStyled.AlertSuccess severity="success" variant="filled">
          This is a success alert.
        </MyStyled.AlertSuccess>
        <div className={classes.space} />
        <MyStyled.AlertInfo severity="info" variant="filled">
          This is a info alert.
        </MyStyled.AlertInfo>
        <div className={classes.space} />
        <MyStyled.AlertWarning severity="warning" variant="filled">
          This is a warning alert.
        </MyStyled.AlertWarning>
        <div className={classes.space} />
        <MyStyled.AlertError severity="error" variant="filled">
          This is a error alert.
        </MyStyled.AlertError>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: theme.spacing(1, 2),
    borderBottom: '1px solid #e0e0e0',
  },
  space: {
    marginBottom: theme.spacing(2),
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(Filled);
