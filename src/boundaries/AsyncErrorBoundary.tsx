import { useEffect, type ReactElement } from 'react';
import { useAsyncError } from 'react-router';

interface AsyncErrorBoundaryProps {
  children?: ReactElement;
  assign?: URL;
  replace?: URL;
}

export function AsyncErrorBoundary({ children, assign, replace }: AsyncErrorBoundaryProps): ReactElement | undefined {
  const error = useAsyncError();

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
