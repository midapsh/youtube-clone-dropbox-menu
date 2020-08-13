import { useContext } from 'react';
import { SideMenuContext, ISideMenuContextData } from './SideMenuState';

export function useSideMenu(): ISideMenuContextData {
  const context = useContext(SideMenuContext);
  return context;
}
