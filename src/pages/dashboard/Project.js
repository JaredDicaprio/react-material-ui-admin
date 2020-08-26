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

import { Projects } from '../../api/data_project';

const Project = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Projects"
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
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">#</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Deadline</TableCell>
                    <TableCell align="right">Progress</TableCell>
                    <TableCell align="right">Color</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Projects.map((row) => (
                    <TableRow key={row.username}>
                      <TableCell component="th" scope="row">
                        {row.avatar}
                      </TableCell>
                      <TableCell align="right">{row.username}</TableCell>
                      <TableCell align="right">{row.deadline}</TableCell>
                      <TableCell align="right">{row.progress}</TableCell>
                      <TableCell align="right">{row.color}</TableCell>
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

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: theme.spacing(1, 2),
    borderBottom: '1px solid #e0e0e0',
  },
  table: {
    minWidth: 650,
  },
}));

export default Project;
