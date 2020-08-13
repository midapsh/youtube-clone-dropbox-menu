import React from 'react';

import AppProvider from './hooks';
import HomePage from './page/HomePage';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <HomePage />
    </AppProvider>
  );
};

export default App;
