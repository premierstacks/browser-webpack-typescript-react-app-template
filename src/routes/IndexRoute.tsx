import { useEffect, type ReactElement } from 'react';
import { useFetcher } from 'react-router-dom';
import { SuspenseValue } from '../components/SupsenseValue';
import { INDEX_USERS_FETCHER, type IndexUsersFetcherInterface } from '../fetchers/indexUsersFetcher';
import { useSeo } from '../lang/seo';
import { useTrans } from '../lang/trans';

export function IndexRoute(): ReactElement {
  const trans = useTrans();

  useSeo({
    title: trans.format('routes.index.seo.title'),
    keywords: trans.format('routes.index.seo.keywords'),
    description: trans.format('routes.index.seo.description'),
  });

  const { load, data } = useFetcher<Awaited<IndexUsersFetcherInterface>>({ key: INDEX_USERS_FETCHER });

  useEffect(() => {
    void load(INDEX_USERS_FETCHER);
  }, [load]);

  return (
    <main>
      <h1>
        {trans.format('routes.index.h1')}
      </h1>
      <section>
        <SuspenseValue
          resolve={data}
        >
          {(resolved) => {
            return resolved.map((user) => {
              return (
                <article
                  key={user.id}
                >
                  <h2>
                    {user.name}
                  </h2>
                </article>
              );
            });
          }}
        </SuspenseValue>
      </section>
    </main>
  );
}
