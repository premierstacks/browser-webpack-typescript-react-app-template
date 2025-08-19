import {
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export interface SuspenseValueProps<T> {
  readonly resolve?: T;
  readonly delay?: number;
  readonly fallback?: ReactNode;
  readonly children: ((value: Exclude<T, undefined>) => ReactNode);
}

export function SuspenseValue<T>({
  resolve,
  delay = 200,
  fallback,
  children,
}: SuspenseValueProps<T>): ReactNode {
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

  if (resolve === undefined) {
    return show || delay <= 0 ? fallback : null;
  }

  return children(resolve as unknown as Exclude<T, undefined>); // eslint-disable-line @typescript-eslint/no-unsafe-type-assertion
}
