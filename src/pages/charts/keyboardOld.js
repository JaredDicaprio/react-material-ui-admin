import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import echarts from 'echarts';
import resizeHandler from './mixins/resize';

import { DYNAMIC_BREADCRUMBS } from '../../store/actions/actionTypes';

const Keyboard = (props) => {
  const idChart = 'keyboard';
  const [widthChart, setWidthChart] = useState('1000px');
  const heightChart = '500px';

  useEffect(() => {
    props.onToggleDynamicBreadcrumbs(['dashboard', 'charts', 'keyboard']);
    initChart();
    resizeHandler(echarts.init(document.getElementById(idChart)));
    resize.observe(document.getElementById('main'));
    console.log(widthChart);
  }, [props]);

  const resize = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const cr = entry.contentRect;
      console.log('Element:', entry.target);
      console.log(`Element size: ${cr.width}px x ${cr.height}px`);
      console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
      setWidthChart(`${cr.width}px`);
    }
    resizeHandler(echarts.init(document.getElementById(idChart)));
  });

  const initChart = () => {
    const chart = echarts.init(document.getElementById(idChart));

    const xAxisData = [];
    const data = [];
    const data2 = [];
    for (let i = 0; i < 50; i += 1) {
      xAxisData.push(i);
      data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
    }
    chart.setOption({
      backgroundColor: 'rgba(51,51,51)',
      grid: {
        left: '5%',
        right: '5%',
      },
      xAxis: [
        {
          show: false,
          data: xAxisData,
        },
        {
          show: false,
          data: xAxisData,
        },
      ],
      visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
          color: [
            '#4a657a',
            '#308e92',
            '#b1cfa5',
            '#f5d69f',
            '#f5898b',
            '#ef5055',
          ],
        },
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#4a657a',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#08263f',
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: 'back',
          type: 'bar',
          data: data2,
          z: 1,
          itemStyle: {
            normal: {
              opacity: 0.4,
              barBorderRadius: 5,
              shadowBlur: 3,
              shadowColor: '#111',
            },
          },
        },
        {
          name: 'Simulate Shadow',
          type: 'line',
          data,
          z: 2,
          showSymbol: false,
          animationDelay: 0,
          animationEasing: 'linear',
          animationDuration: 1200,
          lineStyle: {
            normal: {
              color: 'transparent',
            },
          },
          areaStyle: {
            normal: {
              color: '#08263a',
              shadowBlur: 50,
              shadowColor: '#000',
            },
          },
        },
        {
          name: 'front',
          type: 'bar',
          data,
          xAxisIndex: 1,
          z: 3,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
            },
          },
        },
      ],
      animationEasing: 'elasticOut',
      animationEasingUpdate: 'elasticOut',
      animationDelay(idx) {
        return idx * 20;
      },
      animationDelayUpdate(idx) {
        return idx * 20;
      },
    });
  };

  return (
    <div style={{ width: widthChart, height: heightChart }}>
      <div id={idChart} style={{ width: '100%', height: heightChart }} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  navbarShow: state.navbarShow,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDynamicBreadcrumbs: (action) =>
    dispatch({ type: DYNAMIC_BREADCRUMBS, links: action }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
