import React from 'react';
import { Route, Switch } from 'react-router';
import Admin from '../pages/admin/Admin';
import ComingSoon from '../pages/comingsoon/ComingSoon';
import NotFound from '../pages/errors/NotFound';

export default () => (
  <Switch>
    <Route exact path="/" component={ComingSoon} />
    <Route exact path="/admin" component={Admin} />
    <Route patah="*" component={NotFound} />
  </Switch>
);
