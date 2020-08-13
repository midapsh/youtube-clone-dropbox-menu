import React from 'react';

import HomePage from './page/HomePage';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <HomePage />
    </>
  );
};

export default App;
