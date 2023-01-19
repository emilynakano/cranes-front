import 'styled-components';
import dark from '../theme/dark';

declare module '*.png';
declare module '*.ttf';

declare module 'styled-components' {
  type ThemeType = typeof dark;

  export interface DefaultTheme extends ThemeType {}
}
