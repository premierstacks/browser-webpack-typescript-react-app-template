import { useCallback, type ReactElement } from 'react';
import { Outlet, ScrollRestoration, type Location } from 'react-router-dom';

export function RootRoute(): ReactElement {
  const handleKey = useCallback(({ pathname }: Location): string => pathname, []);

  return (
    <div
      data-testid="sentinel"
    >
      <Outlet />
      <ScrollRestoration
        getKey={handleKey}
      />
    </div>
  );
}
