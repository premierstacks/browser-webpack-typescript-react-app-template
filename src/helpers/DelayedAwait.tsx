import {
  Suspense,
  useMemo,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Await } from 'react-router';

export interface DelayedAwaitProps<T> {
  readonly resolve: Promise<T>;
  readonly delay?: number;
  readonly fallback?: ReactNode;
  readonly errorElement?: ReactNode;
  readonly children: ReactNode | ((value: T) => ReactNode);
}

export function DelayedAwait<T>({
  resolve,
  delay = 200,
  fallback,
  errorElement,
  children,
}: DelayedAwaitProps<T>): ReactElement {
  const delayed = useMemo(() => {
    return Promise.race([
      resolve,
      new Promise<void>((r) => setTimeout(r, delay)),
    ]);
  }, [resolve, delay]);

  return (
    <Suspense>
      <Await
        resolve={delayed}
        errorElement={errorElement}
      >
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
      </Await>
    </Suspense>
  );
}
