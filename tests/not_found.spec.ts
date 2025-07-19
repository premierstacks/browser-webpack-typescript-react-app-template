import { test } from '@playwright/test';
import { assertPage } from './test';

test('/not_found', async ({ page }) => {
  await assertPage(page, '/not_found');
});
