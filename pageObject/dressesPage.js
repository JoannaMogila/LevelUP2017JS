var DressesPage=function DressesPage(){
    this.URL='http://automationpractice.com/index.php?id_category=8&controller=category';
    this.dressesLabel=element(By.css('#center_column > h1 > span.cat-name'));
    this.printedDressLabel=element(By.css('#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a'));
    this.printedDress2Label=element(By.css('#center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a'));
    this.printedSummerDressLabel=element(By.css('#center_column > ul > li:nth-child(3) > div > div.right-block > h5 > a'));
    this.printedSummerDress2Label=element(By.css('#center_column > ul > li:nth-child(4) > div > div.right-block > h5 > a'));
    this.printedChiffonDressLabel=element(By.css('#center_column > ul > li:nth-child(5) > div > div.right-block > h5 > a'))
}
module.exports=DressesPage;