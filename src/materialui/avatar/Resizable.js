import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import dynamicStyles from '../../style';

const Resizable = (props) => {
  const MyStyled = dynamicStyles[props.dynamicStyle];
  const classes = useStyles();
  const [value, setValue] = React.useState(100);
  const [variant, setVariant] = React.useState('circle');

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeVariant = (event, newValue) => {
    setVariant(newValue);
  };

  return (
    <Card>
      <CardHeader
        title="Resizable Usage"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography gutterBottom>Size</Typography>
            <MyStyled.SliderPrimary
              value={value}
              valueLabelDisplay="auto"
              min={50}
              max={150}
              onChange={handleChangeValue}
            />
            <Typography gutterBottom>Variant</Typography>
            <RadioGroup
              name="Variant"
              value={variant}
              onChange={handleChangeVariant}
            >
              <FormControlLabel
                value="circle"
                control={<MyStyled.RadioPrimary />}
                label="circle"
              />
              <FormControlLabel
                value="rounded"
                control={<MyStyled.RadioPrimary />}
                label="rounded"
              />
              <FormControlLabel
                value="square"
                control={<MyStyled.RadioPrimary />}
                label="square"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6} align="center">
            <MyStyled.AvatarSecondary
              variant={variant}
              style={{ width: value, height: value }}
              src="https://avatars3.githubusercontent.com/u/43690181"
            />
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

export default connect(mapStateToProps)(Resizable);
