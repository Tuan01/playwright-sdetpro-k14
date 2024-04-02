import {test} from '@playwright/test';


test('Login test', async ({page}) => {
    await page.goto("https://playwright.dev/");
    const elem = await page.locator('teocodon');
    await elem.click();

    await page.waitForTimeout(1000);
})
