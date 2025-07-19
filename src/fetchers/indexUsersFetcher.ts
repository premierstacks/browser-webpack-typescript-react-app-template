import type { LoaderFunctionArgs } from 'react-router';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

function assertUser(un: unknown): un is User[] {
  return Array.isArray(un);
}

export type IndexUsersFetcherInterface = Promise<User[]>;

export const INDEX_USERS_FETCHER = '/index_users';

export async function indexUsersFetcher({ request }: LoaderFunctionArgs): IndexUsersFetcherInterface {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    signal: request.signal,
  }).then(async (response) => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    if (response.headers.get('Content-Type')?.startsWith('application/json') !== true) {
      throw new Error(response.headers.get('Content-Type') ?? 'Unknown Content-Type');
    }

    const json = await response.json() as unknown;

    if (!assertUser(json)) {
      throw new Error('Invalid response format');
    }

    return json;
  });
}
