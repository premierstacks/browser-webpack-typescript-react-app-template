import {
  Suspense,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Await } from 'react-router';
import { UNLIMITED_PROMISE } from '../../helpers/promises';

export interface SuspenseAwaitProps<T> {
  readonly resolve?: Promise<T>;
  readonly fallback?: ReactNode;
  readonly errorElement?: ReactNode;
  readonly children: ReactNode | ((value: T) => ReactNode);
}

export function SuspenseAwait<T>({
  resolve = UNLIMITED_PROMISE,
  fallback,
  errorElement,
  children,
}: SuspenseAwaitProps<T>): ReactElement {
  return (
    <Suspense
      fallback={fallback}
    >
      <Await
        resolve={resolve}
        errorElement={errorElement}
      >
        {children}
      </Await>
    </Suspense>
  );
}
