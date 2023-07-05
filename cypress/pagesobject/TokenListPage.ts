import WebApi from "../core/WebApi"
const priceLocator = "//a[normalize-space()='Pricing']";
const inputPageNumber = "//div[@class='MuiBox-root css-pji3wn']/input";
const listIcon = "//img[@class='css-1nkc52']";
const listHyperLink = "//td[@class='tb-col css-nchnbv']/a"
const btnNextPage = "//*[@id='main']/div/div/div[2]/div[3]/nav/ul/li[10]/button"

export default class TokenListPage extends WebApi{
    constructor(){
        super();
    }
    goToHomePage() {
        this.openAnyUrl("tokens")
        return this;
    }
    clickToPriceField() {
        this.clickToElementByXpath(priceLocator);
        return this;
    }
    // verifyIconEnable(){
    //     cy.get(listIcon).then(items =>{
    //         cy.get(items[0]).should('exist');
    //     });
    //     return this;
    // }
    verifyButtonNextPage(){
        cy.get(btnNextPage).should('be.enabled')
        return this;
    }
}