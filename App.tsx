import React, { useState, useCallback } from 'react';

import StoreProvider from '@utils/StoreProvider';
import { AppProvider } from '@utils/contexts/AppContext';
import { THEMES } from '@utils/constants';

import DefaultLayout from '@layouts/DefaultLayout';

import Root from '@components/Root';

const App: React.FC = () => {
  const [theme, setTheme] = useState(THEMES.light);

  const toggleTheme = useCallback(() => {
    return theme.fontColor === THEMES.light.fontColor
      ? setTheme(THEMES.dark)
      : setTheme(THEMES.light)
  }, [theme]);

  return (
    <StoreProvider>
      <AppProvider value={{ theme, toggleTheme }}>
        <DefaultLayout>
          <Root />
        </DefaultLayout>
      </AppProvider>
    </StoreProvider>
  );
}

export default App;
