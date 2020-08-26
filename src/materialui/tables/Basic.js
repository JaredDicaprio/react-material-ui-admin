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

const Basic = () => {
  const classes = useStyles();

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
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableTr}>
                      Dessert (100g serving)
                    </TableCell>
                    <TableCell className={classes.tableTr} align="right">
                      Calories
                    </TableCell>
                    <TableCell className={classes.tableTr} align="right">
                      Fat&nbsp;(g)
                    </TableCell>
                    <TableCell className={classes.tableTr} align="right">
                      Carbs&nbsp;(g)
                    </TableCell>
                    <TableCell className={classes.tableTr} align="right">
                      Protein&nbsp;(g)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.table}>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        className={classes.tableTd}
                        data-label="Dessert"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        className={classes.tableTd}
                        data-label="Calories"
                        align="right"
                      >
                        {row.calories}
                      </TableCell>
                      <TableCell
                        className={classes.tableTd}
                        data-label="Fat&nbsp;(g)"
                        align="right"
                      >
                        {row.fat}
                      </TableCell>
                      <TableCell
                        className={classes.tableTd}
                        data-label="Carbs&nbsp;(g)"
                        align="right"
                      >
                        {row.carbs}
                      </TableCell>
                      <TableCell
                        className={classes.tableTd}
                        data-label="Protein&nbsp;(g)"
                        align="right"
                      >
                        {row.protein}
                      </TableCell>
                    </TableRow>
                  ))}
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
  table: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      border: 0,
    },
  },
  tableHead: {
    [theme.breakpoints.down('xs')]: {
      border: 'none',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      width: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
    },
  },
  tableTr: {
    [theme.breakpoints.down('xs')]: {
      borderBottom: '2px solid #ddd',
      display: 'block',
      marginBottom: '.625em',
    },
  },
  tableTd: {
    [theme.breakpoints.down('xs')]: {
      borderBottom: '1px solid #ddd',
      display: 'block',
      fontSize: '.8em',
      textAlign: 'right',
      width: '100%',
      '&::before': {
        content: 'attr(data-label)',
        float: 'left',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      '&:last-child': {
        borderBottom: 0,
      },
    },
  },
}));

export default Basic;
