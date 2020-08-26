import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';

const Complex = () => {
  const classes = useStyles();
  const inputId = 'dynamic-chips';
  const [chips, setChips] = React.useState([]);

  const Chips = () => (
    <div>
      {chips.map((chip, index) => (
        <Chip key={index} label={chip} />
      ))}
    </div>
  );

  const keyPress = (event) => {
    if (event.keyCode === 13) {
      setChips((oldArray) => [...oldArray, event.target.value]);
      document.getElementById(inputId).value = '';
    }
  };

  const handleDelete = () => {
    setChips([]);
  };

  return (
    <Card>
      <CardHeader
        title="Complex Usage"
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
            <Paper component="form" className={classes.root}>
              <IconButton className={classes.iconButton}>
                <AddIcon />
              </IconButton>
              <InputBase
                id={inputId}
                className={classes.input}
                multiline
                placeholder="Your favorite hobbies"
                onKeyDown={keyPress}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                className={classes.iconButton}
                onClick={handleDelete}
                style={{ color: '#f33' }}
              >
                <CloseIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {Chips()}
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
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default Complex;
