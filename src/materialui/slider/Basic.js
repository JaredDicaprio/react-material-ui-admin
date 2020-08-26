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
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import dynamicStyles from '../../style';

const Basic = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Grid item xs={12}>
            <Typography gutterBottom>Default</Typography>
            <MyStyled.SliderPrimary value={value} onChange={handleChange} />
            <Typography gutterBottom>Disabled</Typography>
            <MyStyled.SliderPrimary value={50} disabled />
            <Typography gutterBottom>Discrete sliders</Typography>
            <MyStyled.SliderSecondary
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
            <Typography gutterBottom>Custom marks</Typography>
            <MyStyled.SliderAccent
              defaultValue={20}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
            />
            <Typography gutterBottom>With icon</Typography>
            <Grid container spacing={2}>
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <MyStyled.SliderNeutral value={value} onChange={handleChange} />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
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
