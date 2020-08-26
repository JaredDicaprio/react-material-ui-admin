import React from 'react';
import Page301 from '../pages/errors/Page301';
import Page401 from '../pages/errors/Page401';
import Page403 from '../pages/errors/Page403';
import Page404 from '../pages/errors/Page404';
import Page500 from '../pages/errors/Page500';

import ErrorIcon from '@material-ui/icons/Error';

const parent = 'errorPages';
const errors = [
  {
    id: 10,
    name: 'errors',
    icon: <ErrorIcon />,
    children: [
      {
        id: 1001,
        path: '/301',
        component: Page301,
        name: 'page301',
        parent: parent,
      },
      {
        id: 1002,
        path: '/401',
        component: Page401,
        name: 'page401',
        parent: parent,
      },
      {
        id: 1003,
        path: '/403',
        component: Page403,
        name: 'page403',
        parent: parent,
      },
      {
        id: 1004,
        path: '/404',
        component: Page404,
        name: 'page404',
        parent: parent,
      },
      {
        id: 1005,
        path: '/500',
        component: Page500,
        name: 'page500',
        parent: parent,
      },
    ],
  },
];

export default errors;
