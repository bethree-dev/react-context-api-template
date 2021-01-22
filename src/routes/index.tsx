import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

import PrivateRoute from '../routes/PrivateRoute';

const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route name="Home" exact path="/" component={Home} />
         </Switch>
      </BrowserRouter>
   );
};

export default Routes;
