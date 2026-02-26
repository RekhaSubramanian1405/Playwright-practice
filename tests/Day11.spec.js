const { test, expect } = require('@playwright/test');

test.describe('Day 11 - API Interaction Test (MockAPI Single User)', () => {

  test('GET Single Demo User - Validate status and response data', async ({ request }) => {

    // Call your MockAPI (Single user)
    const response = await request.get('https://698c9eb521a248a273622361.mockapi.io/demousers/1');

    // Validate status code
    expect(response.status()).toBe(200);

    // Parse response body
    const responseBody = await response.json();

    // Print full response
    console.log('Full Response Body:');
    console.log(JSON.stringify(responseBody, null, 2));

    // Validate response is an object
    expect(typeof responseBody).toBe('object');

    // Validate specific properties
    expect(responseBody).toHaveProperty('id', '1');
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('age');

  });

});