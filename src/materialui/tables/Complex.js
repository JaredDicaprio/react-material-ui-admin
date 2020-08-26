import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';

const Complex = () => {
  const classes = useStyles();
  const inputId = 'search-name';
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = () => {
    setSearch('');
    document.getElementById(inputId).value = '';
  };

  const filterSearch = (item) => {
    for (let i = 0; i < search.length; i++) {
      if (search[i] !== item[i]) {
        return false;
      }
    }
    return true;
  };

  const tableRow = (row, index) => {
    return (
      <TableRow key={index}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
    );
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
                <FilterListIcon />
              </IconButton>
              <InputBase
                id={inputId}
                className={classes.input}
                multiline
                placeholder="Search Name"
                onChange={handleSearch}
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
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => {
                    return search !== ''
                      ? filterSearch(row.name) === true
                        ? tableRow(row, index)
                        : ''
                      : tableRow(row, index);
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
  table: {
    minWidth: 650,
  },
}));

export default Complex;
