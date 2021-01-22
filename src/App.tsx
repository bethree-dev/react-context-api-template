import React from 'react';

import './styles/global.scss';

import Routes from './routes';

import Provider from './store';

const App: React.FC = () => (
   <Provider>
      <Routes />
   </Provider>
);

export default App;
