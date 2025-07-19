import { test } from '@playwright/test';
import { assertPages } from './test';

test('recursive link traversal', async ({ page }) => {
  await assertPages(page, '/');
});
