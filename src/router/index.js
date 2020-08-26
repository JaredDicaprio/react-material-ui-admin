import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Progressbar from './Progressbar';
import Dashboard from '../pages/dashboard';
import constants from './constants';
import Page404 from '../pages/errors/Page404';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    {constants.map((route) =>
      route.children ? (
        route.children.map((routerChildren) => (
          <Progressbar key={routerChildren.id} {...routerChildren} />
        ))
      ) : (
        <Progressbar key={route.id} {...route} />
      )
    )}
    <Route path="*" component={Page404} />
  </Switch>
);

export default Routes;
