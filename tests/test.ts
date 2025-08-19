import AxeBuilder from '@axe-core/playwright';
import { expect, type Page } from '@playwright/test';

export async function waitForIdle(page: Page): Promise<void> {
  await page.waitForLoadState('load');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
}

export async function assertAxe(page: Page): Promise<void> {
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice', 'ACT', 'EN-301-549']).analyze()).violations).toEqual([]);
}

export async function assertPage(page: Page, url: string): Promise<void> {
  await page.goto(url);
  await waitForIdle(page);
  await expect(page.getByTestId('sentinel')).toBeAttached();
  await expect(page.locator('#webpack-dev-server-client-overlay')).not.toBeAttached();
  await assertAxe(page);
}

export async function assertPages(page: Page, url: string): Promise<void> {
  await assertPage(page, url);

  const visitedPages = new Set<string>();

  async function recursive(next: string): Promise<void> {
    const normalized = new URL(next, page.url());

    if (visitedPages.has(normalized.pathname)) {
      return;
    }

    visitedPages.add(normalized.pathname);

    await assertPage(page, normalized.pathname);

    const links = await page.locator('a[href]').evaluateAll((elements) => {
      return elements.map((el) => el.getAttribute('href')).filter((href): href is string => typeof href === 'string');
    });

    for (const link of links) {
      await recursive((new URL(link, page.url())).pathname);
    }
  }

  await recursive(url);
}
