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
      description: 'Internacionalización agregada',
      datetime: '15/07/2020',
      icon: () => <LanguageIcon />,
    },
    {
      title: 'Estilos',
      description: 'Se crearon WithStyles y Styled componentes',
      datetime: '12/07/2020',
      icon: () => <StyleIcon />,
    },
    {
      title: 'Configuraciones',
      description: 'Configuración de diseño agregada al proyecto',
      datetime: '01/07/2020',
      icon: () => <SettingsIcon />,
    },
    {
      title: 'Diseño implementado',
      description: 'Diseño agregado al proyecto',
      datetime: '26/06/2020',
      icon: () => <VerticalSplitIcon />,
    },
    {
      title: 'Redux implementado',
      description: 'Redux añadido al proyecto',
      datetime: '24/06/2020',
      icon: () => <StorageIcon />,
    },
    {
      title: 'Inicio del proyecto',
      description: '',
      datetime: '23/06/2020',
      icon: () => <CreateNewFolderIcon />,
    },
  ],
};
