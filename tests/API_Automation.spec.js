const { test, expect, request } = require('@playwright/test');

test.describe('API Automation Scenario', () => {
    test('Validate POST API Response', async ({ request }) => {
        // Define the API endpoint and payload
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        const payload = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        // Send a POST request
        const response = await request.post(apiUrl, {
            data: payload
        });

        // Validate the response status
        expect(response.status()).toBe(201); // HTTP 201 Created

        // Parse the response body
        const responseBody = await response.json();
        console.log('Response Body:', responseBody);

        // Validate the response body
        expect(responseBody).toHaveProperty('id'); // Ensure the response contains an 'id'
        expect(responseBody.title).toBe(payload.title); // Validate the title
        expect(responseBody.body).toBe(payload.body); // Validate the body
        expect(responseBody.userId).toBe(payload.userId); // Validate the userId
    });
});