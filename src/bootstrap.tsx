import { StrictMode } from 'react';
import { RouterProvider as AriaRouterProvider } from 'react-aria';
import { createRoot } from 'react-dom/client';
import { RouterProvider, useHref, type NavigateOptions, type To } from 'react-router-dom';
import { ErrorBoundary } from './boundaries/ErrorBoundary';
import { LocaleProvider } from './lang/trans';
import { createRouter } from './router';

const el = document.createElement('div');

document.body.appendChild(el);

const router = createRouter();

function handleNavigate(to: To, opts: NavigateOptions | undefined): void {
  void router.navigate(to, opts);
}

createRoot(el).render(
  <StrictMode>
    <ErrorBoundary>
      <AriaRouterProvider
        navigate={handleNavigate}
        useHref={useHref}
      >
        <LocaleProvider>
          <RouterProvider
            router={router}
          />
        </LocaleProvider>
      </AriaRouterProvider>
    </ErrorBoundary>
  </StrictMode>,
);
