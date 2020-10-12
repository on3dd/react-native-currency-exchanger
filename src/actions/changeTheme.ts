import { CHANGING_THEME } from '@utils/actionTypes';
import ThemeType from '@typesdir/ThemeType';

const changeAmount = (theme: ThemeType) => {
  return { type: CHANGING_THEME, payload: theme };
};

export default changeAmount;
