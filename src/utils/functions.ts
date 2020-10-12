import { THEMES } from '@utils/constants';

export const isDarkByFontColor = (fontColor: string) => {
  return fontColor === THEMES.dark.fontColor;
};
