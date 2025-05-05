const { test, expect } = require('@playwright/test');

test('New Locators', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

    // This is to locate the login button and click it
    await page.locator('id=login2').click();

    // This is to fill the username and password
    await page.fill('#loginusername', 'Tarlesh');
    await page.fill("input[id='loginpassword']", 'Pwc_Canada');
    await page.click("//button[text()='Log in']");
    await page.waitForTimeout(2000);

    // Verify the logout link
    const Logoutlink = page.locator("//*[@id='logout2']");
    await expect(Logoutlink).toBeVisible(); // Verify the link is visible
    await expect(Logoutlink).toHaveText('Log out'); // Validate the text of the link
    await expect(Logoutlink).toHaveAttribute('href', '#'); // Validate the href attribute of the link

    // Validate the link text on the page
    const linkText = await Logoutlink.innerText();
    console.log('Link Text is:', linkText);
    await expect(linkText).toBe('Log out'); // Validate the text of the link
    // take a screenshot of the page
    


    

});


