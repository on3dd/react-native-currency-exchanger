import React, { useState } from 'react';

import StoreProvider from '@utils/StoreProvider';
import { AppProvider } from '@utils/contexts/AppContext';
import { THEMES } from '@utils/constants';

import DefaultLayout from '@layouts/DefaultLayout';

import Root from '@components/Root';

const App: React.FC = () => {
  const [theme, setTheme] = useState(THEMES.light);

  return (
    <StoreProvider>
      <AppProvider theme={theme}>
        <DefaultLayout>
          <Root />
        </DefaultLayout>
      </AppProvider>
    </StoreProvider>
  );
}

export default App;
