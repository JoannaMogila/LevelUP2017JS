beforeAll(function(){'kod ktory wykona sie przed wszytskim'
});
beforeEach(function(){'kod ktory wykona sie przed kazdym testem'
});
afterAll(function(){'kod ktory wykona sie po wszytskim'
});
afterEach(function(){'kod ktory wykona sie oo kazdym tescie'
});

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
        
    expect(browser.findElement(By.css('.shopping_cart')).getText()).toEqual('Cart (empty)');
    
        });
    });
     
    