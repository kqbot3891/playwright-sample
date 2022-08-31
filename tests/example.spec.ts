import { test, expect } from '@playwright/test';
import { DbViews } from '../common/page-objects/db-views';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  let loginPage = DbViews.loginPage(page);
  await loginPage.navigateToPage();
  await loginPage.signIn('bkup-kq01@dbx51.com', 'asdf1234');
});

test('Without Stubs', async ({ page }) => {
  await page.route('**/2/user_metadata/user_metadata/get', async route => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({"metadata": {"BACKUP_HAS_DISMISSED_WEB_WELCOME_MODAL": "true", "BACKUP_HAS_DISMISSED_OVER_QUOTA_BANNER": "false", "BACKUP_HAS_DISMISSED_SHARING_INFO_BANNER": "null", "BACKUP_HAS_DISMISSED_TRY_EDB_BANNER": "false", "BACKUP_HAS_DISMISSED_SKU_EXEMPT_BANNER": "null", "BACKUP_HAS_DISMISSED_PAIRED_ACCOUNT_REMINDER": "null", "BACKUP_HAS_DISMISSED_OPEN_PARTNERSHIP_BANNER": "null"}})
    })
  })
  await page.goto('backups');
  await expect(page.locator('div.backup-title-container')).toContainText('Backups');
});

test('With Stubs', async ({ page }) => {
  await page.route('**/2/user_metadata/user_metadata/get', async route => {
    route.fulfill({
      status: 200,
      body: JSON.stringify({"metadata": {"BACKUP_HAS_DISMISSED_WEB_WELCOME_MODAL": "false", "BACKUP_HAS_DISMISSED_OVER_QUOTA_BANNER": "false", "BACKUP_HAS_DISMISSED_SHARING_INFO_BANNER": "null", "BACKUP_HAS_DISMISSED_TRY_EDB_BANNER": "false", "BACKUP_HAS_DISMISSED_SKU_EXEMPT_BANNER": "null", "BACKUP_HAS_DISMISSED_PAIRED_ACCOUNT_REMINDER": "null", "BACKUP_HAS_DISMISSED_OPEN_PARTNERSHIP_BANNER": "null"}})
    })
  })

  await DbViews.backupPage(page).navigateToPage()
  await expect(DbViews.welcomeBackupModal(page).main).toContainText('Welcome to Dropbox Backup');
});
