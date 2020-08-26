import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReactEcharts from 'echarts-for-react';

const Raddar = () => {
  const classes = useStyles();
  const idChart = 'raddar';
  const widthChart = '100%';
  const heightChart = '300px';

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      radar: {
        radius: '66%',
        center: ['50%', '42%'],
        splitNumber: 8,
        splitArea: {
          areaStyle: {
            color: 'rgba(127,95,132,.3)',
            opacity: 1,
            shadowBlur: 45,
            shadowColor: 'rgba(0,0,0,.5)',
            shadowOffsetX: 0,
            shadowOffsetY: 15,
          },
        },
        indicator: [
          { name: 'Sales', max: 10000 },
          { name: 'Administration', max: 20000 },
          { name: 'Information Techology', max: 20000 },
          { name: 'Customer Support', max: 20000 },
          { name: 'Development', max: 20000 },
          { name: 'Marketing', max: 20000 },
        ],
      },
      legend: {
        left: 'center',
        bottom: '10',
        data: ['Allocated Budget', 'Expected Spending', 'Actual Spending'],
      },
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1,
            },
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: 'Allocated Budget',
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: 'Expected Spending',
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: 'Actual Spending',
            },
          ],
          animationDuration: 3000,
        },
      ],
    };
  };

  return (
    <Card>
      <CardHeader
        title="Raddar Chart"
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

export default Raddar;
