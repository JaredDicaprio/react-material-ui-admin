import route from './route';
import roadmaps from './roadmaps';

export default {
  ...route,
  ...roadmaps,
  toolbar: {
    settings: 'Configurações',
    profile: 'Perfil',
    logout: 'Sair',
  },
  settings: {
    title: 'Configurações',
    version: 'Verção',
    position: 'Posição dos Elementos',
    style: 'Estilo',
    toolbarDense: 'Toolbar densa',
    navbarDense: 'Navbar densa',
    navbarHeader: 'Navbar header',
    fullScreenBtn: 'FullScreen btn',
    settingsBtn: 'Configurações btn',
    footer: 'Rodapé',
    dark: 'Tema Escuro',
  },
  login: {
    titleIn: 'Formulário de Entrada',
    titleUn: 'Fomulário de Inscrição',
    singIn: 'Entrar',
    singUp: 'Inscrever-se',
    email: 'Email',
    password: 'Senha',
    confirm: 'Confirmar',
  },
  error: {
    error: 'Erro',
    back: 'Tire-me daqui!',
    301: 'Movido Permanentemente',
    401: 'Não autorizado',
    403: 'Proibido',
    404: 'Não encontrado',
    500: 'Erro do Servidor Interno',
  },
  guidedesc: {
    description:
      'A página do guia é útil para algumas pessoas que entraram no projeto ' +
      'pela primeira vez. Você pode apresentar brevemente os recursos do projeto. A demonstração é baseada no',
    button: 'Mostrar Guia',
    content: 'Vamos começar nossa jornada!',
    skip: 'P-U-L-A-R',
  },
  ui: {
    description: 'Os estilos foram criados com',
    default: 'Padrão',
    primary: 'Primária',
    secondary: 'Secundária',
    error: 'Erro',
    warning: 'Aviso',
    info: 'Informações',
    success: 'Sucesso',
    accent: 'Acentuado',
    neutral: 'Neutro',
    fist: 'Primeiro nome',
    last: 'Último nome',
  },
  i18ndesc: {
    description: 'A internacionalização deste projeto é baseada em',
  },
  tinymce: {
    description:
      'Editor de rich text online lançado como software de código aberto sob a LGPL.',
  },
  markdown: {
    description: 'Markdown é baseado em',
  },
  jsonEditor: {
    description: 'JsonEditor é baseado em',
    jsonLint: 'lint é baseado em json-lint',
  },
  dropZone: {
    description: 'Isso é baseado em',
  },
  dragKanban: {
    description: 'Isso é baseado em',
    too: 'Permite arrastar e painel e itens dentro.',
  },
};
