import React from 'react';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import StorageIcon from '@material-ui/icons/Storage';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import SettingsIcon from '@material-ui/icons/Settings';
import StyleIcon from '@material-ui/icons/Style';
import LanguageIcon from '@material-ui/icons/Language';

export default {
  roadmaps: [
    {
      title: 'I18n implemented',
      description: 'Internationalization added',
      datetime: '15/07/2020',
      icon: () => <LanguageIcon />,
    },
    {
      title: 'Styles',
      description: 'WithStyles and Styled components were created',
      datetime: '12/07/2020',
      icon: () => <StyleIcon />,
    },
    {
      title: 'Settings',
      description: 'Layout settings added to the project',
      datetime: '01/07/2020',
      icon: () => <SettingsIcon />,
    },
    {
      title: 'Implemented layout',
      description: 'Layout added to the project',
      datetime: '26/06/2020',
      icon: () => <VerticalSplitIcon />,
    },
    {
      title: 'Redux implemented',
      description: 'Redux added to the project',
      datetime: '24/06/2020',
      icon: () => <StorageIcon />,
    },
    {
      title: 'Project start',
      description: '',
      datetime: '23/06/2020',
      icon: () => <CreateNewFolderIcon />,
    },
  ],
};
