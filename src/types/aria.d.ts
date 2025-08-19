import type { NavigateOptions, To } from 'react-router-dom';

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NavigateOptions;
    href: To;
  }
}
