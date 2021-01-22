import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
   component: React.FC<any>;
   name: string;
   path: string;
   exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...otherProps }) => {
   return (
      <Route
         {...otherProps}
         render={(props) =>
            false ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
         }
      />
   );
};

export default PrivateRoute;
