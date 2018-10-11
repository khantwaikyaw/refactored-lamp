import React from 'react';
import { Route, Switch } from 'react-router';
import ComingSoon from '../pages/comingsoon/ComingSoon';
import NotFound from '../pages/errors/NotFound';

export default () => (
  <Switch>
    <Route exact path="/" component={ComingSoon} />
    <Route patah="*" component={NotFound} />
  </Switch>
);
