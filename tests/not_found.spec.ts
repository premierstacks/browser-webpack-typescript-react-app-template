import { expect, test } from '@playwright/test';
import { en } from '../src/lang/en';
import { assertPage } from './test';

test('/not_found', async ({ page }) => {
  await assertPage(page, '/not_found');

  await expect(page).toHaveURL('/not_found');

  await expect(page).toHaveTitle(en['routes.not_found.seo.title']);
});
