import React, { createContext, useCallback, useState } from 'react';

export interface ISideMenuContextData {
  sideMenuState: boolean;
  openSideMenu(): void;
  closeSideMenu(): void;
}

export const SideMenuContext = createContext<ISideMenuContextData>(
  {} as ISideMenuContextData,
);

export const SideMenuProvider: React.FC = ({ children }) => {
  const [sideMenuState, setSideMenuState] = useState<boolean>(false);

  const openSideMenu = useCallback(async (): Promise<void> => {
    setSideMenuState(true);
  }, []);

  const closeSideMenu = useCallback(async (): Promise<void> => {
    setSideMenuState(false);
  }, []);

  return (
    <SideMenuContext.Provider
      value={{ sideMenuState, openSideMenu, closeSideMenu }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};
