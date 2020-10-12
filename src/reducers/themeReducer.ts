import { CHANGING_THEME } from '@utils/actionTypes';
import { THEMES } from '@utils/constants';

import ThemeState from '@typesdir/states/theme';
import Action from '@typesdir/Action';

const initialState: ThemeState = {
  type: THEMES.light,
};

const amountReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGING_THEME:
      return Object.assign({}, state, {
        type: action.payload,
      });

    default:
      return state;
  }
};

export default amountReducer;
