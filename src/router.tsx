import { createBrowserRouter } from 'react-router-dom';
import { RouteErrorBoundary } from './boundaries/RouteErrorBoundary';
import { INDEX_USERS_FETCHER, indexUsersFetcher } from './fetchers/indexUsersFetcher';
import { IndexRoute } from './routes/IndexRoute';
import { NotFoundRoute } from './routes/NotFoundRoute';
import { RootRoute } from './routes/RootRoute';

export function createRouter() {
  return createBrowserRouter([
    {
      path: INDEX_USERS_FETCHER,
      loader: indexUsersFetcher,
    },
    {
      element: <RootRoute />,
      errorElement: <RouteErrorBoundary />,
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
  ]);
}
