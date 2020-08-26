import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';
import dynamicStyles from '../../style';

const Loading = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Card>
      <CardHeader
        title="Loading Button"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <MyStyled.ButtonAccent
              className={buttonClassname}
              startIcon={<CloudUploadIcon />}
              variant="contained"
              onClick={handleButtonClick}
            >
              Upload
            </MyStyled.ButtonAccent>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <div className={classes.wrapper}>
            <MyStyled.FabNeutral
              className={buttonClassname}
              onClick={handleButtonClick}
            >
              <SaveIcon />
            </MyStyled.FabNeutral>
            {loading && (
              <CircularProgress size={68} className={classes.fabProgress} />
            )}
          </div>
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
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: '#4caf50',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  fabProgress: {
    color: '#4caf50',
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: '#4caf50',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const mapStateToProps = (state) => ({
  dynamicStyle: state.dynamicStyle,
});

export default connect(mapStateToProps)(Loading);
