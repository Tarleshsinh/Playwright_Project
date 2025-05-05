const {test, expect} = require('@playwright/test');

test('Built In Locators', async ({page}) => {

page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const logo = await page.getByAltText('company-branding')
await expect(logo).toBeVisible(); // Verify the logo is visible

await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click(); // Click the login button

await page.waitForTimeout(2000); // Wait for 2 seconds


const name = await page.locator('//*[@class="oxd-userdropdown-name"]').textContent()
await expect(await page.getByText(name)).toBeVisible(); // Verify the dashboard is visible












});
