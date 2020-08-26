import route from './route';
import roadmaps from './roadmaps';

export default {
  ...route,
  ...roadmaps,
  toolbar: {
    settings: 'Configuraciones',
    profile: 'Perfil',
    logout: 'Cerrar sesión',
  },
  settings: {
    title: 'Configuraciones',
    version: 'Versión',
    position: 'Posición de elementos',
    style: 'Estilo',
    toolbarDense: 'Toolbar dense',
    navbarDense: 'Navbar dense',
    navbarHeader: 'Navbar header',
    fullScreenBtn: 'FullScreen btn',
    settingsBtn: 'Configuraciones btn',
    footer: 'Pie de página',
    dark: 'Tema oscuro',
  },
  login: {
    titleIn: 'Formulario de entrada',
    titleUn: 'Formulario de inscripción',
    singIn: 'Iniciar sesión',
    singUp: 'Suscribirse',
    email: 'Email',
    password: 'Contraseña',
    confirm: 'Confirmar',
  },
  error: {
    error: 'Error',
    back: '¡Sácame de aquí!',
    301: 'Movido permanentemente',
    401: 'No autorizado',
    403: 'Prohibido',
    404: 'No encontrado',
    500: 'Error de servidor interno',
  },
  guidedesc: {
    description:
      'La página de la guía es útil para algunas personas que ingresaron al proyecto por ' +
      'la primera vez. Puede presentar brevemente las características del proyecto. La demostración se basa en',
    button: 'Mostrar guía',
    content: '¡Comencemos nuestro viaje!',
    skip: 'S-A-L-t-A-R',
  },
  ui: {
    description: 'Los estilos fueron creados con',
    default: 'patrón',
    primary: 'Primaria',
    secondary: 'Secundaria',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Info',
    success: 'Éxito',
    accent: 'Acento',
    neutral: 'Neutro',
    fist: 'primer nombre',
    last: 'último nombre',
  },
  i18ndesc: {
    description: 'La internacionalización de este proyecto se basa en',
  },
  tinymce: {
    description:
      'Editor de texto enriquecido en línea lanzado como software de código abierto bajo la LGPL.',
  },
  markdown: {
    description: 'Markdown se basa en',
  },
  jsonEditor: {
    description: 'JsonEditor se basa en',
    jsonLint: 'lint se basa en json-lint',
  },
  dropZone: {
    description: 'Esto se basa en',
  },
  dragKanban: {
    description: 'Esto se basa en',
    too: 'Le permite arrastrar un panel y elementos dentro.',
  },
};
