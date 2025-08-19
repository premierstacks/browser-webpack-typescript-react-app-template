import type { ReactElement } from 'react';
import { useSeo } from '../lang/seo';
import { useTrans } from '../lang/trans';

export function NotFoundRoute(): ReactElement {
  const trans = useTrans();

  useSeo({
    title: trans.format('routes.not_found.seo.title'),
    keywords: trans.format('routes.not_found.seo.keywords'),
    description: trans.format('routes.not_found.seo.description'),
  });

  return (
    <main>
      <h1>
        {trans.format('routes.not_found.h1')}
      </h1>
    </main>
  );
}
