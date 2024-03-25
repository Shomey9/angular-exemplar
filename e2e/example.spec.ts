import { expect, test } from "@playwright/test";

test('has title', async ({ page }, testInfo) => {
    await page.goto('http://localhost:4200/')

    await expect(page).toHaveTitle('AngularExemplar')
    await expect(page.getByRole('heading', { name: 'Welcome to angular-exemplar!' })).toBeVisible()
    await testInfo.attach("example", {
        body: await page.screenshot(),
        contentType: "image/png",
    })
})