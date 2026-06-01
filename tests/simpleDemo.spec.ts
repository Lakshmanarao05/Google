import {test, expect} from '@playwright/test';
test('verify text in console', async ({page}) =>{
    console.log("Hello plawright");
})