import debounce from './utils';

const resizeHandler = (chart) => {
  const resizeHandler = debounce(() => {
    if (chart) {
      window.onresize = () => {
        chart.resize();
      };
    }
  }, 100);

  const initResize = () => {
    window.removeEventListener('resize', resizeHandler);
    window.addEventListener('resize', resizeHandler);
    return;
  };

  return initResize();
};

export default resizeHandler;
