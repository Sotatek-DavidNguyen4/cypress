import WebApi from "../core/WebApi"

const blockchainDropdownList = "//span[text()='Blockchain']/..";
const nativeTokensPanel = "//span[text()='Native Tokens']/..";
const listIcon = "//img[@class='css-1nkc52']";
const listHyperLink = "a[class='css-1f770t5']"
const btnNextPage = "//*[@id='main']/div/div/div[2]/div[3]/nav/ul/li[10]/button"
const btnSortTotalTransactions = "//th[normalize-space()='Total Transactions']//button[@type='button']//*[name()='svg']"
const btnSortTotalSupply = "//th[normalize-space()='Total Supply']//button[@type='button']//*[name()='svg']"
const btnSortCreated = "//th[normalize-space()='Created']//button[@type='button']//*[name()='svg']"
const txbPageNumber = "//input[@value='1']"

export default class TokenListPage extends WebApi{
    constructor(){
        super();
    }

    goToHomePage() {
        this.openAnyUrl("tokens")
        return this;
    }

    clickToBlockChainMenu() {
        this.clickToElementByXpath(blockchainDropdownList);
        return this;
    }

    clickToNativeTokensPanel() {
        this.clickToElementByXpath(nativeTokensPanel);
        return this;
    }

    clickToBtnNextPage() {
        this.clickToElementByXpath(btnNextPage);
        return this;
    }

    clickToBtnSortTotalTransaction() {
        this.clickToElementByXpath(btnSortTotalTransactions);
        return this;
    }

    clickToBtnSortTotalSupply() {
        this.clickToElementByXpath(btnSortTotalSupply);
        return this;
    }

    clickToBtnSortCreated() {
        this.clickToElementByXpath(btnSortCreated);
        return this;
    }

    verifyButtonNextPage(){
        cy.get(btnNextPage).should('be.enabled')
        return this;
    }

    verifyButtonSortTotalTransaction(){
        cy.get(btnSortTotalTransactions).should('be.enabled')
        return this;
    }

    verifyButtonSortTotalSuplly(){
        cy.get(btnSortTotalSupply).should('be.enabled')
        return this;
    }

    verifyButtonSortCreated(){
        cy.get(btnSortCreated).should('be.enabled')
        return this;
    }
}