const { test, expect } = require('@playwright/test');

test('Locate Multiple Elements', async ({ browser }) => {
    // Launch a new browser context with a large viewport to simulate maximized window
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 } // Set a large viewport size
    });
    const page = await context.newPage();

    await page.goto('https://demoblaze.com/index.html');

    const links = await page.$$('a'); // Get all anchor elements
    for (const link of links) {
        const text = await link.innerText(); // Get the text of each link
        console.log('Link Text is:', text); // Print the text to the console
    }

    const productLinks = await page.$$("div#tbodyid div h4 a"); // Get all anchor elements inside the specified div
    for (const link of productLinks) {
        const text = await link.innerText(); // Get the text of each link
        console.log('Product Link Text is:', text); // Print the text to the console
    }

    // Update the expectedTexts array to match the actual product link texts
    const expectedTexts = [
        'Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6', 
        'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 
        'HTC One M9', 'Sony vaio i7' // Updated to match the actual text
    ];
    for (let i = 0; i < productLinks.length; i++) {
        const text = await productLinks[i].innerText(); // Get the text of each link
        console.log('Product Link Text is:', text); // Print the text to the console
        expect(text).toBe(expectedTexts[i]); // Validate the text of the links
    }

    // Close the browser context
    await context.close();
});
