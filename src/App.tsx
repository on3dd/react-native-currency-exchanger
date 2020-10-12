import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppProvider } from '@utils/contexts/AppContext';
import { THEMES } from '@utils/constants';
import { isDarkByFontColor } from '@utils/functions';

import changeTheme from '@actions/changeTheme';

import RootState from '@typesdir/states/root';

import DefaultLayout from '@layouts/DefaultLayout';

import Root from '@components/Root';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme.type);

  const toggleTheme = useCallback(() => {
    return isDarkByFontColor(theme.fontColor)
      ? dispatch(changeTheme(THEMES.light))
      : dispatch(changeTheme(THEMES.dark))
  }, [theme]);

  return (
    <AppProvider value={{ theme, toggleTheme }}>
      <DefaultLayout>
        <Root />
      </DefaultLayout>
    </AppProvider>
  );
}

export default App;
