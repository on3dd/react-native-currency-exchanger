import React from 'react';

import { AppProvider } from '@utils/AppContext';
import DefaultLayout from '@layouts/DefaultLayout';
import Root from '@components/Root';

const App: React.FC = () => {
  return (
    <AppProvider>
      <DefaultLayout>
        <Root />
      </DefaultLayout>
    </AppProvider>
  );
}

export default App;
