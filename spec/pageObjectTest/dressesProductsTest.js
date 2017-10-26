var using = require("jasmine-data-provider");


var HomePage = require(pageObjectDir + "/homePage.js");
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var ProductPage = require(pageObjectDir + "/productPage.js");


var homePage = new HomePage();
var dressesPage = new DressesPage();
var productPage = new ProductPage();


var data = {
    "dress1": {
        'nameSelector': "printedDressLabel",
        "name": "Printed Dress",
        "price": "$26.00"    
    },
    "dress2": {
        'nameSelector': "printedDress2Label",
        "name": "Printed Dress",
        "price": "$50.99" 
    },
    "dress3": {
        'nameSelector': "printedSummerDressLabel",
        "name": "Printed Summer Dress",
        "price": "$28.98" 
    },
    "dress4": {
        'nameSelector': "printedSummerDress2Label",
        "name": "Printed Summer Dress",
        "price": "$30.50" 
    },
    "dress5": {
        'nameSelector': "printedChiffonDressLabel",
        "name": "Printed Chiffon Dress",
        "price": "$16.40" 
    }
}

beforeAll(function () {
    browser.get(homePage.URL);
})

describe('Dresses Products test', function () {
    it('Check if Dresses Label has correct value', function () {
        homePage.dressesOverlap.click();
        expect(dressesPage.dressesLabel.getText()).toEqual('DRESSES ');
    })

    using(data,  function (dress) {
        it('Click Dress label and check on the product page if name has correct value', function () {
            dressesPage[dress.nameSelector].click();
            expect(productPage.productLabel.getText()).toEqual(dress.name); 
        })
        it('Click Dress label and check on the product page if price has correct value', function () { 
            expect(productPage.priceLabel.getText()).toEqual(dress.price); 
            browser.navigate().back(); 
            
        })

    })
        
});

  

