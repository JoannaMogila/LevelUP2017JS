var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var TopsPage = require(pageObjectDir + "/topsPage.js");
var ProductPage = require(pageObjectDir + "/productPage.js");
var CartPage = require(pageObjectDir + "/cartPage.js");


var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var productPage = new ProductPage();
var cartPage = new CartPage();

beforeAll(function () {
    browser.get(homePage.URL);
})

describe('Add to cart', function () {
    it('Click Women overlap', function () {
        homePage.womenOverlap.click();
    })
    it('Check if Women Label has correct value?', function () {
        expect(womenPage.womenLabel.getText()).toEqual('WOMEN ');
    })
    it('Click Tops category', function () {
        womenPage.topsCategory.click();
    })
    it('Check if Tops Label has correct value?', function () {
        expect(topsPage.topsLabel.getText()).toEqual('TOPS ');
    })
    it('Click Faded Short Sleeve T-shirts', function () {
        topsPage.fadedShortSleeveLabel.click();
    })
    it('Check if Faded Short Sleeve T-shirts Label has correct value??', function () {
        expect(productPage.fadedShortSleeveLabel.getText()).toEqual('Faded Short Sleeve T-shirts');
    })
    it('Check if product description is longer than 8 chars?', function () {
        productPage.isLabelLongerThan(8).then(console.log);
        expect(productPage.isLabelLongerThan(8)).toBeTruthy();
    })
    it('Check if condition value is new?', function () {
        expect(productPage.conditionValue.getText()).toEqual('New');
    })
    it('Click M size from dropdown list', function () {
        productPage.sizeMDropdownList.click();
    })
    it('Click Add to cart button', function () {
        productPage.addToCartButton.click();
    })
    it('Click cart label 2 times', function () {
        productPage.cartLabel.click();
        productPage.cartLabel.click();
    })
    it('Check if Faded Short Sleeve T-shirts Label is displayed?', function () {
        expect(cartPage.productDescription.isDisplayed()).toBeTruthy();
    })
    it('Check if Faded Short Sleeve T-shirts Label has correct value?', function () {
        expect(cartPage.productDescription.getText()).toEqual('Faded Short Sleeve T-shirts');
    })
    it('Check if product quantity has correct value?', function () {
        expect(cartPage.productQuantity.getAttribute('value')).toEqual('1');
    })
    
});