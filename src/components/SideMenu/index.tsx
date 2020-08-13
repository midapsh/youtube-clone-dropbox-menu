import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { useSideMenu } from '../../hooks/sidemenu';

import { scrollThreshold } from './constants';
import { Container } from './styles';

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const { sideMenuState, closeSideMenu } = useSideMenu();

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      closeSideMenu();
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [closeSideMenu]);

  const classes = [
    sideMenuState ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];
  const className = clsx(classes);

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
