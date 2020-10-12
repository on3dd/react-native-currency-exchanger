import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '@store/index';
import Spinner from '@components/base-ui/Spinner';

type StoreProviderProps = {
  children: JSX.Element;
}

const StoreProvider: React.FC<StoreProviderProps> = (
  { children }: StoreProviderProps
) => {
  const loading = <Spinner visible={true} />

  return (
    <Provider store={store}>
      <PersistGate
        loading={loading}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  )
}

export default StoreProvider;
