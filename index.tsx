import React from 'react';
import { registerRootComponent } from 'expo'

import StoreProvider from '@utils/StoreProvider';

import App from './src/App';

const Index: React.FC = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  )
}

export default registerRootComponent(Index);
