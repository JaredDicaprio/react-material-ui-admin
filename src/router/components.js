import React from 'react';
import Tinymce from '../components/tinymce';
import MarkdownApp from '../components/markdown';
import JsonEditorApp from '../components/jsonEditor';
import DropzoneApp from '../components/dropzone';
import DragKanbanApp from '../components/dragKanban';

import ViewModuleIcon from '@material-ui/icons/ViewModule';

const parent = 'component';
const components = [
  {
    id: 8,
    name: 'components',
    icon: <ViewModuleIcon />,
    children: [
      {
        id: 801,
        path: '/tinymce',
        component: Tinymce,
        name: 'tinymce',
        parent: parent,
      },
      {
        id: 802,
        path: '/markdown',
        component: MarkdownApp,
        name: 'markdown',
        parent: parent,
      },
      {
        id: 803,
        path: '/json-editor',
        component: JsonEditorApp,
        name: 'jsonEditor',
        parent: parent,
      },
      {
        id: 804,
        path: '/dropzone',
        component: DropzoneApp,
        name: 'dropzone',
        parent: parent,
      },
      {
        id: 805,
        path: '/dragkanban',
        component: DragKanbanApp,
        name: 'dragKanban',
        parent: parent,
      },
    ],
  },
];

export default components;
