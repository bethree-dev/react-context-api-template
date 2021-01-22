import React from 'react';

import { UIProvider } from './ui/UIProvider';

const Provider: React.FC = ({ children }) => {
   return <UIProvider>{children}</UIProvider>;
};

export default Provider;
