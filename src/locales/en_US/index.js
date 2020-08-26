import route from './route';
import roadmaps from './roadmaps';

export default {
  ...route,
  ...roadmaps,
  toolbar: {
    settings: 'Settings',
    profile: 'Profile',
    logout: 'Logout',
  },
  settings: {
    title: 'Settings',
    version: 'Version',
    position: 'Position of elements',
    style: 'Style',
    toolbarDense: 'Toolbar dense',
    navbarDense: 'Navbar dense',
    navbarHeader: 'Navbar header',
    fullScreenBtn: 'FullScreen btn',
    settingsBtn: 'Setting btn',
    footer: 'Footer',
    dark: 'Dark theme',
  },
  login: {
    titleIn: 'Sing In Form',
    titleUn: 'Sing Up Form',
    singIn: 'Sing in',
    singUp: 'Sing up',
    email: 'Email',
    password: 'Password',
    confirm: 'Confirm',
  },
  error: {
    error: 'Error',
    back: 'Get me out of here!',
    301: 'Moved Permanently',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
  },
  guidedesc: {
    description:
      'The guide page is useful for some people who entered the project for ' +
      'the first time. You can briefly introduce the features of the project. Demo is based on',
    button: 'Show Guide',
    content: 'Let`s begin our journey!',
    skip: 'S-K-I-P',
  },
  ui: {
    description: 'The styles were created with',
    default: 'Default',
    primary: 'Primary',
    secondary: 'Secondary',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
    success: 'Success',
    accent: 'Accent',
    neutral: 'Neutral',
    fist: 'Fist name',
    last: 'Last name',
  },
  i18ndesc: {
    description: 'The internationalization of this project is based on',
  },
  tinymce: {
    description:
      'Online rich-text editor released as open-source software under the LGPL.',
  },
  markdown: {
    description: 'Markdown is based on',
  },
  jsonEditor: {
    description: 'JsonEditor is based on',
    jsonLint: 'lint is based on json-lint',
  },
  dropZone: {
    description: 'This is based on',
  },
  dragKanban: {
    description: 'This is based on',
    too: 'Allows you to drag and panel and items inside.',
  },
};
