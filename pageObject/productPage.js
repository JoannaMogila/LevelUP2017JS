var ProductPage=function ProductPage(){
    this.URL='http://automationpractice.com/index.php?id_product=1&controller=product';
    this.fadedShortSleeveLabel=element(By.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1'));
    this.productDescription=element(By.css('#short_description_content > p'));
    this.conditionValue=element(By.css('#product_condition > span'));
    this.sizeMDropdownList=element(By.css('#group_1 > option:nth-child(2)'));
    this.addToCartButton=element(By.css('#add_to_cart > button > span'));
    this.cartLabel=element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
}

ProductPage.prototype.isLabelLongerThan = function (isLongerThan) {
    var that=this;
    return new Promise(function (resolve) {
        that.productDescription.getText().then(function (text) {
           resolve(text.length > isLongerThan);
           //resolve(text.length);
        })
    });
}





module.exports=ProductPage;