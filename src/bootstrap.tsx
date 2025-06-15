import { YouBackgroundEffect } from '@premierstacks/material-design-you-react-aria-stack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ErrorBoundary } from './errors/ErrorBoundary';
import { LocaleProvider } from './lang/trans';
import { createRouter } from './router';

const el = document.createElement('div');

document.body.appendChild(el);

const router = createRouter();

createRoot(el).render(
  <StrictMode>
    <ErrorBoundary>
      <YouBackgroundEffect>
        <LocaleProvider>
          <RouterProvider
            router={router}
          />
        </LocaleProvider>
      </YouBackgroundEffect>
    </ErrorBoundary>
  </StrictMode>,
);
