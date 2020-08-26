import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import dynamicStyles from '../../style';

const Closable = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const [alert1, setAlert1] = React.useState(true);
  const [alert2, setAlert2] = React.useState(true);
  const [alert3, setAlert3] = React.useState(true);
  const [alert4, setAlert4] = React.useState(true);
  const classes = useStyles();

  const reset = () => {
    setAlert1(true);
    setAlert2(true);
    setAlert3(true);
    setAlert4(true);
  };

  return (
    <Card>
      <CardHeader
        title="Closable Alerts"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Collapse in={alert1}>
          <MyStyled.AlertSuccess
            severity="success"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert1(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            This is a success alert.
          </MyStyled.AlertSuccess>
        </Collapse>
        <div className={classes.space} />
        <Collapse in={alert2}>
          <MyStyled.AlertInfo
            severity="info"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert2(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            This is a info alert.
          </MyStyled.AlertInfo>
        </Collapse>
        <div className={classes.space} />
        <Collapse in={alert3}>
          <MyStyled.AlertWarning
            severity="warning"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert3(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            This is a warning alert.
          </MyStyled.AlertWarning>
        </Collapse>
        <div className={classes.space} />
        <Collapse in={alert4}>
          <MyStyled.AlertError
            severity="error"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert4(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            This is a error alert.
          </MyStyled.AlertError>
        </Collapse>
        <div className={classes.space} />
        <div align="center">
          <MyStyled.ButtonPrimary
            variant="contained"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </MyStyled.ButtonPrimary>
        </div>
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

export default connect(mapStateToProps)(Closable);
