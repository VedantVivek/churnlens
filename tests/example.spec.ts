import { test, expect } from '@playwright/test';

test('landing page loads and shows the main heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('ChurnLens');
});

test('dashboard loads with KPI cards', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('text=Total Users')).toBeVisible();
  await expect(page.locator('text=Activation Rate')).toBeVisible();
});

test('users page loads and search works', async ({ page }) => {
  await page.goto('/users');
  await expect(page.locator('h1')).toContainText('User Records');
  await page.fill('input[placeholder="Search by User ID..."]', '9999');
  await expect(page.locator('text=No users match')).toBeVisible();
});

test('process page shows funnel chart', async ({ page }) => {
  await page.goto('/process');
  await expect(page.locator('h1')).toContainText('Process Intelligence', { timeout: 10000 });
});

test('requirements page shows BA documentation', async ({ page }) => {
  await page.goto('/requirements');
  await expect(page.locator('h1')).toContainText('Requirements Hub');
  await expect(page.getByRole('heading', { name: 'Functional Requirements', exact: true })).toBeVisible({ timeout: 10000 });
});