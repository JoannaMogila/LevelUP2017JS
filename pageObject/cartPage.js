var CartPage=function CartPage(){
    this.URL='http://automationpractice.com/index.php?controller=order';
    this.productDescription=element(By.css('#product_1_3_0_0 > td.cart_description > p > a'));
    this.productQuantity=element(By.css('#product_1_3_0_0 > td.cart_quantity.text-center > input.cart_quantity_input.form-control.grey'))
}
module.exports=CartPage;