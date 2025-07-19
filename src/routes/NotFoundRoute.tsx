import type { ReactElement } from 'react';
import { useMeta } from '../lang/seo';
import { useTrans } from '../lang/trans';
import { ExpressiveContainerPadding, ExpressiveHeadingTitleMedium, ExpressivePaneGrid, ExpressiveSurface, ExpressiveSurfacePadding } from '@premierstacks/material-design-expressive-react-aria-stack';

export function NotFoundRoute(): ReactElement {
  const trans = useTrans();

  useMeta({
    title: trans.format('routes.not_found.title'),
    keywords: trans.format('routes.not_found.keywords'),
    description: trans.format('routes.not_found.description'),
  });

  return (
    <ExpressiveContainerPadding>
      <ExpressivePaneGrid>
        <ExpressiveSurface>
          <ExpressiveSurfacePadding>
            <main>
              <ExpressiveHeadingTitleMedium>
                {trans.format('routes.not_found.h1')}
              </ExpressiveHeadingTitleMedium>
            </main>
          </ExpressiveSurfacePadding>
        </ExpressiveSurface>
      </ExpressivePaneGrid>
    </ExpressiveContainerPadding>
  );
}
