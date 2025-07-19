import { useEffect, type ReactElement } from 'react';
import { useRouteError } from 'react-router';

interface RouteErrorBoundaryProps {
  children?: ReactElement;
  assign?: URL;
  replace?: URL;
}

export function RouteErrorBoundary({ children, assign, replace }: RouteErrorBoundaryProps): ReactElement | undefined {
  const error = useRouteError();

  useEffect(() => {
    window.dispatchEvent(new ErrorEvent('error', { error }));
  }, [error]);

  useEffect(() => {
    if (assign !== undefined && assign.toString() !== location.toString()) {
      location.assign(assign);
    }
  }, [assign]);

  useEffect(() => {
    if (replace !== undefined && replace.toString() !== location.toString()) {
      location.replace(replace);
    }
  }, [replace]);

  return children;
}
