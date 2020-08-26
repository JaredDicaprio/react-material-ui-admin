import React from 'react';
import materialui from './materialui';
import components from './components';
import charts from './charts';
import errors from './errors';
import Dashboard from '../pages/dashboard';
import Documentation from '../pages/documentation';
import Guide from '../pages/guide';
import Roadmap from '../pages/roadmap';
import Style from '../pages/style';
import I18nApp from '../pages/i18n';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SubjectIcon from '@material-ui/icons/Subject';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExploreIcon from '@material-ui/icons/Explore';
import PaletteIcon from '@material-ui/icons/Palette';
import TranslateIcon from '@material-ui/icons/Translate';

const constants = [
  {
    id: 1,
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    path: '/documentation',
    component: Documentation,
    name: 'documentation',
    icon: <SubjectIcon />,
  },
  {
    id: 3,
    path: '/guide',
    component: Guide,
    name: 'guide',
    icon: <NearMeIcon />,
  },
  {
    id: 4,
    path: '/roadmap',
    component: Roadmap,
    name: 'roadmap',
    icon: <ExploreIcon />,
  },
  {
    id: 5,
    path: '/style',
    component: Style,
    name: 'style',
    icon: <PaletteIcon />,
  },
  {
    id: 6,
    path: '/i18n',
    component: I18nApp,
    name: 'i18n',
    icon: <TranslateIcon />,
  },
  ...materialui,
  ...components,
  ...charts,
  ...errors,
];

export default constants;
