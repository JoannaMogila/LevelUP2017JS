var WomanPage=function WomanPage(){
    this.URL='http://automationpractice.com/index.php?id_category=3&controller=category';
    this.womenLabel=element(By.css('#center_column > h1 > span.cat-name'));
    this.topsCategory=element(By.css('#categories_block_left > div > ul > li:nth-child(1) > a'))
}
module.exports=WomanPage;