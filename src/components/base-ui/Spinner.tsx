import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

type BaseSpinnerProps = {
  visible?: boolean;
};

const BaseSpinner = ({ visible = false }: BaseSpinnerProps) => (
  <Spinner
    visible={visible}
    animation="fade"
  />
);

export default BaseSpinner;
