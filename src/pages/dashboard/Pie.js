import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReactEcharts from 'echarts-for-react';

const Pie = () => {
  const classes = useStyles();
  const idChart = 'pie';
  const widthChart = '100%';
  const heightChart = '300px';

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        left: 'center',
        bottom: '10',
        data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts'],
      },
      calculable: true,
      series: [
        {
          name: 'WEEKLY WRITE ARTICLES',
          type: 'pie',
          roseType: 'radius',
          radius: [15, 95],
          center: ['50%', '38%'],
          data: [
            { value: 320, name: 'Industries' },
            { value: 240, name: 'Technology' },
            { value: 149, name: 'Forex' },
            { value: 100, name: 'Gold' },
            { value: 59, name: 'Forecasts' },
          ],
          animationEasing: 'cubicInOut',
          animationDuration: 2600,
        },
      ],
    };
  };

  return (
    <Card>
      <CardHeader
        title="Pie Chart"
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <ReactEcharts
              id={idChart}
              option={initChart()}
              style={{ height: heightChart, width: widthChart }}
              opts={{ renderer: 'svg' }}
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

export default Pie;
