import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReactEcharts from 'echarts-for-react';

import ChartData from '../../api/data_chart';

const Line = () => {
  const classes = useStyles();
  const idChart = 'line';
  const widthChart = '100%';
  const heightChart = '300px';
  const [lineChartData, setLineChartData] = React.useState(
    ChartData.newVisitis
  );

  useEffect(() => {
    if (document.getElementById(idChart)) {
      initChart();
    }
  });

  const handleSetLineChartData = (type) => {
    setLineChartData(type);
  };

  const initChart = () => {
    return {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
        axisTick: {
          show: false,
        },
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 20,
        top: 30,
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
        padding: [5, 10],
      },
      yAxis: {
        axisTick: {
          show: false,
        },
      },
      legend: {
        data: ['expected', 'actual'],
      },
      series: [
        {
          name: 'expected',
          itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2,
              },
            },
          },
          smooth: true,
          type: 'line',
          data: lineChartData.expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut',
        },
        {
          name: 'actual',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2,
              },
              areaStyle: {
                color: '#f3f8ff',
              },
            },
          },
          data: lineChartData.actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut',
        },
      ],
    };
  };

  const count = (values) => {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
      total += values[i];
    }
    return total;
  };

  const cardNewVisitis = () => (
    <Card
      className={classes.root}
      onClick={() => handleSetLineChartData(ChartData.newVisitis)}
    >
      <CardActionArea>
        <CardContent className={classes.content}>
          <Grid container>
            <Grid item sm={6} md={6} align="center">
              <GroupIcon style={{ fontSize: 70, color: 'rgb(255, 152, 0)' }} />
            </Grid>
            <Grid item sm={6} md={6} align="center">
              <Typography variant="subtitle1" color="textSecondary">
                New Visitis
              </Typography>
              <Typography component="h5" variant="h5">
                {count(ChartData.newVisitis.actualData)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const cardMessages = () => (
    <Card
      className={classes.root}
      onClick={() => handleSetLineChartData(ChartData.messages)}
    >
      <CardActionArea>
        <CardContent className={classes.content}>
          <Grid container>
            <Grid item sm={6} md={6} align="center">
              <MessageIcon
                style={{ fontSize: 70, color: 'rgb(33, 150, 243)' }}
              />
            </Grid>
            <Grid item sm={6} md={6} align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Messages
              </Typography>
              <Typography component="h5" variant="h5">
                {count(ChartData.messages.actualData)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const cardPurchases = () => (
    <Card
      className={classes.root}
      onClick={() => handleSetLineChartData(ChartData.purchases)}
    >
      <CardActionArea>
        <CardContent className={classes.content}>
          <Grid container>
            <Grid item sm={6} md={6} align="center">
              <AttachMoneyIcon
                style={{ fontSize: 70, color: 'rgb(96, 125, 139)' }}
              />
            </Grid>
            <Grid item sm={6} md={6} align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Purchases
              </Typography>
              <Typography component="h5" variant="h5">
                {count(ChartData.purchases.actualData)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const cardShoppings = () => (
    <Card
      className={classes.root}
      onClick={() => handleSetLineChartData(ChartData.shoppings)}
    >
      <CardActionArea>
        <CardContent className={classes.content}>
          <Grid container>
            <Grid item sm={6} md={6} align="center">
              <ShoppingCartIcon
                style={{ fontSize: 70, color: 'rgb(76, 175, 80)' }}
              />
            </Grid>
            <Grid item sm={6} md={6} align="center">
              <Typography variant="subtitle1" color="textSecondary">
                Shoppings
              </Typography>
              <Typography component="h5" variant="h5">
                {count(ChartData.shoppings.actualData)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const cardChart = () => (
    <Card>
      <CardHeader
        title="Line Chart"
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

  return (
    <Grid container spacing={1}>
      <Grid item sm={12} md={3} xs={12}>
        {cardNewVisitis()}
      </Grid>
      <Grid item sm={12} md={3} xs={12}>
        {cardMessages()}
      </Grid>
      <Grid item sm={12} md={3} xs={12}>
        {cardPurchases()}
      </Grid>
      <Grid item sm={12} md={3} xs={12}>
        {cardShoppings()}
      </Grid>
      <Grid item sm={12} md={12} xs={12}>
        {cardChart()}
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
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
}));

export default Line;
