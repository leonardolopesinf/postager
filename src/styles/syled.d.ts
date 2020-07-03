import 'styled-components';
import themes from './themes'

type Theme = typeof themes;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}