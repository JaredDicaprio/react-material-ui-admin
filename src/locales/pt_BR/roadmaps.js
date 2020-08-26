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
      title: 'I18n implementado',
      description: 'Internacionalização acrescentado',
      datetime: '15/07/2020',
      icon: () => <LanguageIcon />,
    },
    {
      title: 'Estilos',
      description: 'Componentes WithStyles e Styled foram criados',
      datetime: '12/07/2020',
      icon: () => <StyleIcon />,
    },
    {
      title: 'Configurações',
      description: 'Configurações de layout adicionado ao projeto',
      datetime: '01/07/2020',
      icon: () => <SettingsIcon />,
    },
    {
      title: 'Layout implementado',
      description: 'Layout adicionado ao projeto',
      datetime: '26/06/2020',
      icon: () => <VerticalSplitIcon />,
    },
    {
      title: 'Redux implementado',
      description: 'Redux adicionado ao projeto',
      datetime: '24/06/2020',
      icon: () => <StorageIcon />,
    },
    {
      title: 'Início do projeto',
      description: '',
      datetime: '23/06/2020',
      icon: () => <CreateNewFolderIcon />,
    },
  ],
};
