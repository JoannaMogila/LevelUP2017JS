var using=require('jasmine-data-provider');

// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
    //ignoreSynchronization: 'true',
    waitForAngularEnabled:"false",
    browserName: 'chrome'
    },
    frameworks: ['jasmine'],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    suites: {
    jasmine: 'spec/jasmine/*.js',
    pageObject: 'spec/pageObjectTest/*.js',
    dev: 'spec/pageObjectTest/flowTest.js',
    zad1: 'spec/pageObjectTest/addToCartTest.js',
    zad2: 'spec/pageObjectTest/dressesProductsTest.js'
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    },
    onPrepare:function(){
        global.using=using;
        global.pageObjectDir=__dirname+"/pageObject";
        browser.ignoreSynchronization=true;
        browser.driver.manage().window().maximize();
    },

};