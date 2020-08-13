import React from 'react';
import { SideMenuProvider } from './sidemenu/SideMenuState';

const AppProvider: React.FC = ({ children }) => {
  return <SideMenuProvider>{children}</SideMenuProvider>;
};

export default AppProvider;
