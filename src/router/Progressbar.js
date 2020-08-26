import React, { useLayoutEffect, useEffect } from 'react';
import { Route } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './Progressbar.scss';

NProgress.configure({ showSpinner: false });

/*class Progressbar extends Component {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    //console.log("Inicia");
    NProgress.start();
  }

  componentDidMount() {
    //console.log("Finaliza");
    NProgress.done();
  }

  render() {
    return <Route {...this.props} />;
  }
}*/

const Progressbar = (props) => {
  useLayoutEffect(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return <Route {...props} />;
};

export default Progressbar;
