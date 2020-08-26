import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Snackbar from '@material-ui/core/Snackbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import dynamicStyles from '../../style';

const Basic = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const [text, setText] = React.useState("Hello, I'm a snackbar");
  const [duration, setDuration] = React.useState(6000);
  const [vertical, setVertical] = React.useState('top');
  const [horizontal, setHorizontal] = React.useState('center');
  const [transition, setTransition] = React.useState({
    option: 'Fade',
    Transition: Fade,
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleDuration = (event) => {
    if (event.target.value) {
      setDuration(parseFloat(event.target.value));
    } else {
      setDuration(0);
    }
  };

  const handleVertical = (event) => {
    setVertical(event.target.value);
  };

  const handleHorizontal = (event) => {
    setHorizontal(event.target.value);
  };

  const handleTransition = (event) => {
    if (event.target.value === 'GrowTransition') {
      setTransition({ option: event.target.value, Transition: GrowTransition });
    } else if (event.target.value === 'Fade') {
      setTransition({ option: event.target.value, Transition: Fade });
    } else if (event.target.value === 'SlideTransition') {
      setTransition({
        option: event.target.value,
        Transition: SlideTransition,
      });
    }
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
          <Grid item xs={6}>
            <Typography gutterBottom>Vertical</Typography>
            <RadioGroup
              row
              name="vertical"
              value={vertical}
              onChange={handleVertical}
            >
              <FormControlLabel value="top" control={<Radio />} label="Top" />
              <FormControlLabel
                value="bottom"
                control={<Radio />}
                label="Bottom"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Horizontal</Typography>
            <RadioGroup
              row
              name="horizontal"
              value={horizontal}
              onChange={handleHorizontal}
            >
              <FormControlLabel value="left" control={<Radio />} label="Left" />
              <FormControlLabel
                value="center"
                control={<Radio />}
                label="Center"
              />
              <FormControlLabel
                value="right"
                control={<Radio />}
                label="Right"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Transition</Typography>
            <RadioGroup
              row
              name="transition"
              value={transition.option}
              onChange={handleTransition}
            >
              <FormControlLabel
                value="GrowTransition"
                control={<Radio />}
                label="Grow Transition"
              />
              <FormControlLabel
                value="Fade"
                control={<Radio />}
                label="Fade Transition"
              />
              <FormControlLabel
                value="SlideTransition"
                control={<Radio />}
                label="Slide Transition"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Text" value={text} onChange={handleText} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Timeout"
              type="number"
              value={duration}
              onChange={handleDuration}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <MyStyled.ButtonPrimary
              variant="contained"
              style={{ width: '100%' }}
              onClick={handleClick()}
            >
              Show Snackbar
            </MyStyled.ButtonPrimary>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              TransitionComponent={transition.Transition}
              message={text}
              key={vertical + horizontal + transition.option}
              autoHideDuration={duration}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

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
