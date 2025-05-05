import { test, expect } from '@playwright/test';

test('locator', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

    // This is to locate element
    await page.locator('id=login2').click();

    // This is to fill the username and password
    await page.fill('#loginusername', 'Tarlesh');
    await page.fill("input[id='loginpassword']", 'Pwc_Canada');
    await page.click("//button[text()='Log in']");
    await page.waitForTimeout(2000);

    // Verify logout link
    const Logoutlink = await page.locator("//*[@id='logout2']");
    await expect(Logoutlink).toBeVisible();

    //give me code to valdate the link on the page
    const linkText = await Logoutlink.innerText();
    console.log('Link Text is:', linkText);
    await expect(Logoutlink).toHaveText('Log out');
    

    await page.close();
});





