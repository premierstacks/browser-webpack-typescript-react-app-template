import { ExpressiveContainerPadding, ExpressiveHeadingContext, ExpressiveHeadingHeadlineMedium, ExpressiveHeadingHeadlineSmall, ExpressivePaneGrid, ExpressiveSurface, ExpressiveSurfacePadding } from '@premierstacks/material-design-expressive-react-aria-stack';
import { useEffect, type ReactElement } from 'react';
import { useMeta } from '../lang/seo';
import { useTrans } from '../lang/trans';
import { useFetcher } from 'react-router';
import { INDEX_USERS_FETCHER, type IndexUsersFetcherInterface } from '../fetchers/indexUsersFetcher';
import { SuspenseAwait } from '../components/promises/SuspenseAwait';

export function IndexRoute(): ReactElement {
  const trans = useTrans();

  useMeta({
    title: trans.format('routes.index.title'),
    keywords: trans.format('routes.index.keywords'),
    description: trans.format('routes.index.description'),
  });

  const { load, data } = useFetcher<Awaited<IndexUsersFetcherInterface>>({ key: INDEX_USERS_FETCHER });

  useEffect(() => {
    void load(INDEX_USERS_FETCHER);
  }, [load]);

  return (
    <ExpressiveContainerPadding>
      <ExpressivePaneGrid>
        <ExpressiveSurface>
          <ExpressiveSurfacePadding>
            <main>
              <ExpressiveHeadingHeadlineMedium>
                {trans.format('routes.index.h1')}
              </ExpressiveHeadingHeadlineMedium>
              <section>
                <SuspenseAwait
                  resolve={data}
                  fallback="loading"
                >
                  {(resolved) => {
                    return resolved.map((user) => {
                      return (
                        <ExpressiveHeadingContext
                          key={user.id}
                        >
                          <article>
                            <ExpressiveHeadingHeadlineSmall>
                              {user.name}
                            </ExpressiveHeadingHeadlineSmall>
                          </article>
                        </ExpressiveHeadingContext>
                      );
                    });
                  }}
                </SuspenseAwait>
              </section>
            </main>
          </ExpressiveSurfacePadding>
        </ExpressiveSurface>
      </ExpressivePaneGrid>
    </ExpressiveContainerPadding>
  );
}
