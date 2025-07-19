import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ErrorBoundary } from './boundaries/ErrorBoundary';
import { LocaleProvider } from './lang/trans';
import { createRouter } from './router';
import { applyDocumentBackground, ExpressiveHeadingContext } from '@premierstacks/material-design-expressive-react-aria-stack';

const el = document.createElement('div');

document.body.appendChild(el);

applyDocumentBackground();

const router = createRouter();

createRoot(el).render(
  <StrictMode>
    <ErrorBoundary>
      <ExpressiveHeadingContext>
        <LocaleProvider>
          <RouterProvider
            router={router}
          />
        </LocaleProvider>
      </ExpressiveHeadingContext>
    </ErrorBoundary>
  </StrictMode>,
);
