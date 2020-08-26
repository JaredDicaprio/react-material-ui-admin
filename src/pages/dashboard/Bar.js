import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReactEcharts from 'echarts-for-react';

const Bar = () => {
  const classes = useStyles();
  const idChart = 'bar';
  const widthChart = '100%';
  const heightChart = '300px';

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    const animationDuration = 6000;

    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        top: 10,
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration,
        },
        {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration,
        },
        {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration,
        },
      ],
    };
  };

  return (
    <Card>
      <CardHeader
        title="Bar Chart"
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

export default Bar;
