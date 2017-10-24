var ContactUsPage=function ContactUsPage(){
    this.URL='http://automationpractice.com/index.php?controller=contact';
    this.headerLabel=element(By.css('#center_column > h1'));
    this.dropDownList=element(By.css('#id_contact'));
    this.sendButton=element(By.css('#submitMessage > span'))
}
module.exports=ContactUsPage;