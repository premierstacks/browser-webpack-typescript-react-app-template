import { expect, test } from '@playwright/test';
import { en } from '../src/lang/en';
import { assertPage } from './test';

test('/', async ({ page }) => {
  await assertPage(page, '/');

  await expect(page).toHaveURL('/');

  await expect(page).toHaveTitle(en['routes.index.seo.title']);
});
