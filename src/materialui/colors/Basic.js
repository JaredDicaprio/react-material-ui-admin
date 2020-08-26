import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import colors from './colors';

const Basic = () => {
  const classes = useStyles();
  const inputId = 'search-colors';
  const [color, setColor] = React.useState('');

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleDelete = () => {
    setColor('');
    document.getElementById(inputId).value = '';
  };

  const filterColor = (item) => {
    for (let i = 0; i < color.length; i++) {
      if (color[i] !== item[i]) {
        return false;
      }
    }
    return true;
  };

  const cardTitle = (item) => (
    <Card style={{ backgroundColor: item.color[500] }} square>
      <CardContent>
        <Typography
          className={classes.text}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );

  const cardColor = (item) => {
    let rows = [];
    for (let i = 100; i <= 900; i += 100) {
      rows.push(
        <Card style={{ backgroundColor: item.color[i] }} square>
          <CardContent>
            <Typography
              className={classes.text}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {i}
            </Typography>
          </CardContent>
        </Card>
      );
    }
    return rows;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton}>
            <FilterListIcon />
          </IconButton>
          <InputBase
            id={inputId}
            className={classes.input}
            multiline
            placeholder="Search Material Colors"
            onChange={handleColor}
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
      <Grid item sm={12} md={12} xs={12}>
        <Grid container spacing={2}>
          {colors.map((item, index) => {
            return color !== '' ? (
              filterColor(item.title) === true ? (
                <Grid key={index} item sm={12} md={3} xs={12}>
                  {cardTitle(item)}
                  {cardColor(item)}
                </Grid>
              ) : (
                ''
              )
            ) : (
              <Grid key={index} item sm={12} md={3} xs={12}>
                {cardTitle(item)}
                {cardColor(item)}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
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
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
}));

export default Basic;
