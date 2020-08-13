import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { scrollThreshold } from './constants';
import { Container } from './styles';

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];
  const className = clsx(classes);

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
