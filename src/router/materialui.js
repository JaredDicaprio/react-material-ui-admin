import React from 'react';
import GridApp from '../materialui/grid';
import AlertApp from '../materialui/alert';
import AvatarApp from '../materialui/avatar';
import BadgeApp from '../materialui/badge';
import ButtonsApp from '../materialui/buttons';
import CardsApp from '../materialui/cards';
import ChipApp from '../materialui/chip';
import ColorsApp from '../materialui/colors';
import DialogsApp from '../materialui/dialogs';
import ProgressApp from '../materialui/progress';
import SliderApp from '../materialui/slider';
import SnackbarApp from '../materialui/snackbar';
import TablesApp from '../materialui/tables';
import TooltipApp from '../materialui/tooltip';
import TypographyApp from '../materialui/typography';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const parent = 'materialuiComponents';
const materialui = [
  {
    id: 7,
    name: 'materialui',
    icon: <MenuOpenIcon />,
    children: [
      {
        id: 701,
        path: '/grid',
        component: GridApp,
        name: 'grid',
        parent: parent,
      },
      {
        id: 702,
        path: '/alert',
        component: AlertApp,
        name: 'alert',
        parent: parent,
      },
      {
        id: 703,
        path: '/avatar',
        component: AvatarApp,
        name: 'avatar',
        parent: parent,
      },
      {
        id: 704,
        path: '/badge',
        component: BadgeApp,
        name: 'badge',
        parent: parent,
      },
      {
        id: 705,
        path: '/buttons',
        component: ButtonsApp,
        name: 'buttons',
        parent: parent,
      },
      {
        id: 706,
        path: '/cards',
        component: CardsApp,
        name: 'cards',
        parent: parent,
      },
      {
        id: 707,
        path: '/chip',
        component: ChipApp,
        name: 'chip',
        parent: parent,
      },
      {
        id: 708,
        path: '/colors',
        component: ColorsApp,
        name: 'colors',
        parent: parent,
      },
      {
        id: 709,
        path: '/dialogs',
        component: DialogsApp,
        name: 'dialogs',
        parent: parent,
      },
      {
        id: 710,
        path: '/progress',
        component: ProgressApp,
        name: 'progress',
        parent: parent,
      },
      {
        id: 711,
        path: '/slider',
        component: SliderApp,
        name: 'slider',
        parent: parent,
      },
      {
        id: 712,
        path: '/snackbar',
        component: SnackbarApp,
        name: 'snackbar',
        parent: parent,
      },
      {
        id: 713,
        path: '/tables',
        component: TablesApp,
        name: 'tables',
        parent: parent,
      },
      {
        id: 714,
        path: '/tooltip',
        component: TooltipApp,
        name: 'tooltip',
        parent: parent,
      },
      {
        id: 715,
        path: '/typography',
        component: TypographyApp,
        name: 'typography',
        parent: parent,
      },
    ],
  },
];

export default materialui;
