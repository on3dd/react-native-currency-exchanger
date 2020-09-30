import React from 'react';

import { AppProvider } from '@utils/contexts/AppContext';
import StoreProvider from '@utils/StoreProvider';
import DefaultLayout from '@layouts/DefaultLayout';
import Root from '@components/Root';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <AppProvider>
        <DefaultLayout>
          <Root />
        </DefaultLayout>
      </AppProvider>
    </StoreProvider>
  );
}

export default App;
