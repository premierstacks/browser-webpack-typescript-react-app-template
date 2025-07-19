import { createBrowserRouter } from 'react-router';
import { IndexRoute } from './routes/IndexRoute';
import { NotFoundRoute } from './routes/NotFoundRoute';
import { ReactAriaProviderRoute } from './routes/ReactAriaProviderRoute';
import { ScrollRestorationRoute } from './routes/ScrollRestorationRoute';
import { SentinelRoute } from './routes/SentinelRoute';
import { RouteErrorBoundary } from './boundaries/RouteErrorBoundary';
import { INDEX_USERS_FETCHER, indexUsersFetcher } from './fetchers/indexUsersFetcher';

export function createRouter() {
  return createBrowserRouter([
    {
      errorElement: <RouteErrorBoundary />,
      children: [
        {
          path: INDEX_USERS_FETCHER,
          loader: indexUsersFetcher,
        },
        {
          element: <SentinelRoute />,
          children: [
            {
              element: <ReactAriaProviderRoute />,
              children: [
                {
                  element: <ScrollRestorationRoute />,
                  children: [
                    {
                      index: true,
                      element: <IndexRoute />,
                    },
                    {
                      path: '*',
                      element: <NotFoundRoute />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
}
