import {test, expect} from "@playwright/test";
test("Verif page title", async ({page}) =>{
    await page.goto("https://www.google.com/");
    console.log("Page title : ",await page.title())
    expect(await page.title()).toBe('Google');
})
test("Verif page URL", async ({page}) =>{
    await page.goto("https://www.google.com/");
    console.log("Page title : ", page.url())
    expect(await page.url()).toBe('https://www.google.com/');
})