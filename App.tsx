import React from 'react';

import { AppProvider } from '@utils/AppContext';
import Root from '@components/Root';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}

export default App;
