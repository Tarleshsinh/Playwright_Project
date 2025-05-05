const { test, expect } = require('@playwright/test');

test.describe('Automation Store', () => {
    test('Visit Automation Store Homepage', async ({ page }) => {
        // Navigate to the homepage
        await page.goto('https://automationstore.com/');
        await page.waitForTimeout(2000); // Wait for 2 seconds
        const title = await page.title();
        console.log('Page Title:', title);
        await expect(title).not.toBeNull(); // Validate the title is not null

        // Validate click on element by XPath
        const pneumaticSelector = "//i[@class='icon navPages-action-moreIcon']/*[name()='svg']";
        await page.waitForSelector(pneumaticSelector); // Wait for the element to appear
        const pneumatic = await page.$(pneumaticSelector); // Locate the element using XPath
        if (!pneumatic) {
            throw new Error("Pneumatic element not found");
        }
        await pneumatic.click(); // Click the element

        // Wait for NFPA Cylinders link and click it
        const nfpaLinkSelector = "//*[contains(text(),'NFPA Cylinders')]";
        await page.waitForSelector(nfpaLinkSelector); // Wait for the link to appear
        await page.click(nfpaLinkSelector);

        // Validate that the NFPA Cylinders heading is displayed
        const nfpaHeadingSelector = "//*[@class='page-heading' and text()='NFPA Cylinders']";
        await page.waitForSelector(nfpaHeadingSelector); // Wait for the heading to appear
        const nfpaCylinders = await page.$(nfpaHeadingSelector); // Locate the element using XPath
        if (!nfpaCylinders) {
            throw new Error("NFPA Cylinders heading not found");
        }
        const isVisible = await nfpaCylinders.isVisible(); // Check if the element is visible
        console.log('Is NFPA Cylinders visible:', isVisible);
        expect(isVisible).toBeTruthy(); // Validate visibility

        // Take a screenshot of the element
        await nfpaCylinders.screenshot({ path: './screenshots/nfpaa_cylinders.png' }); // Save the screenshot
    });
});


