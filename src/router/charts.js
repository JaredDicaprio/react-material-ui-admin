import React from 'react';
import Keyboard from '../pages/charts/Keyboard';
import Line from '../pages/charts/Line';
import Mix from '../pages/charts/Mix';

import DonutSmallIcon from '@material-ui/icons/DonutSmall';

const parent = 'chart';
const charts = [
  {
    id: 9,
    name: 'charts',
    icon: <DonutSmallIcon />,
    children: [
      {
        id: 901,
        path: '/keyboard',
        component: Keyboard,
        name: 'keyboardChart',
        parent: parent,
      },
      {
        id: 902,
        path: '/line',
        component: Line,
        name: 'lineChart',
        parent: parent,
      },
      {
        id: 903,
        path: '/mix',
        component: Mix,
        name: 'mixChart',
        parent: parent,
      },
    ],
  },
];

export default charts;
