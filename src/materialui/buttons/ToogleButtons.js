import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LaptopIcon from '@material-ui/icons/Laptop';
import TvIcon from '@material-ui/icons/Tv';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

const ToogleButtons = () => {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const [view, setView] = React.useState('list');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <Card>
      <CardHeader
        title="Toogle Button"
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
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Normal
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Multiple
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="color" aria-label="color" disabled>
                  <FormatColorFillIcon />
                  <ArrowDropDownIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              Vertical buttons
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton value="list" aria-label="list">
                  <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                  <ViewModuleIcon />
                </ToggleButton>
                <ToggleButton value="quilt" aria-label="quilt">
                  <ViewQuiltIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Enforce value set
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.toggleContainer}>
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="device"
                >
                  <ToggleButton value="laptop" aria-label="laptop">
                    <LaptopIcon />
                  </ToggleButton>
                  <ToggleButton value="tv" aria-label="tv">
                    <TvIcon />
                  </ToggleButton>
                  <ToggleButton value="phone" aria-label="phone">
                    <PhoneAndroidIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Multiple
            </Typography>
            <Paper elevation={0} className={classes.paper}>
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </StyledToggleButtonGroup>
              <Divider
                flexItem
                orientation="vertical"
                className={classes.divider}
              />
              <StyledToggleButtonGroup
                size="small"
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                <ToggleButton value="bold" aria-label="bold">
                  <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                  <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                  <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="color" aria-label="color" disabled>
                  <FormatColorFillIcon />
                  <ArrowDropDownIcon />
                </ToggleButton>
              </StyledToggleButtonGroup>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: theme.spacing(1, 2),
    borderBottom: '1px solid #e0e0e0',
  },
  paper: {
    display: 'flex',
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
}));

export default ToogleButtons;
