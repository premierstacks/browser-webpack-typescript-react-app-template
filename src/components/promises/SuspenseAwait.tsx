import {
  Suspense,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Await } from 'react-router';
import { UNLIMITED_PROMISE } from '../../helpers/promises';

export interface SuspenseAwaitProps<T> {
  readonly resolve?: Promise<T> | T;
  readonly delay?: number;
  readonly fallback?: ReactNode;
  readonly errorElement?: ReactNode;
  readonly children: ReactNode | ((value: T) => ReactNode);
}

export function SuspenseAwait<T>({
  resolve = UNLIMITED_PROMISE,
  delay = 200,
  fallback,
  errorElement,
  children,
}: SuspenseAwaitProps<T>): ReactElement {
  const [show, setShow] = useState(delay <= 0);

  useEffect(() => {
    if (delay <= 0) {
      return;
    }

    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <Suspense
      fallback={show || delay <= 0 ? fallback : null}
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
