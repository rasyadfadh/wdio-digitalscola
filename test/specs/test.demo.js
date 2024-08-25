

describe('Test saucedemo', () => {
    it('Test 1 - Sauce Demo Test', async () => {
        await browser.url("https://www.saucedemo.com/")
        
        const usernametxtbox = await browser.$("#user-name")
        const passwordtxtbox = await browser.$("#password")
        const loginbtn = await browser.$('//input[@type="submit"]')

        const addToCartBtn1 = await browser.$("#add-to-cart-sauce-labs-backpack")
        const addToCartBtn2 = await browser.$("#add-to-cart-sauce-labs-bolt-t-shirt")
        const cartIcon = await browser.$("#shopping_cart_container")
        const inventoryItem = await browser.$("#cart_item")

        await usernametxtbox.addValue("standard_user")
        await passwordtxtbox.addValue("secret_sauce")
        await loginbtn.click()
   
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')

        await addToCartBtn1.click()
        await addToCartBtn2.click()
        await cartIcon.click()

        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await inventoryItem =='Sauce Labs Backpack'
        await inventoryItem == 'Sauce Labs Bolt T-Shirt'
        
    });
});