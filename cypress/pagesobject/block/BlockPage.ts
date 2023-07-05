import WebApi from "../../core/WebApi";

//locators
const blockChainLocator = "//img[@alt='Blockchain']//parent::div";
const blocksLocator = "//a[contains(@href,'/blocks')]";
const txtColumnName = "//th[contains(text(),'%s')]";
const transactionBtn = "//th[contains(text(),'Transactions')]//button";
const createdAtBtn = "//th[contains(text(),'Created At')]//button";
const listBlock = '//div[@data-testid="blocks-card"]//tbody//tr';
const numberBlockPerPage =
  '//span[contains(text(),"Per page")]//preceding-sibling::div/div';
export default class LoginPage extends WebApi {
  goToHomePage() {
    this.openAnyUrl("/");
    return this;
  }
  clickToBlockChainField() {
    this.clickToElementByXpath(blockChainLocator);
    return this;
  }

  clickToBlocksField() {
    this.clickToElementByXpath(blocksLocator);
    return this;
  }
  verifyColumnName() {
    this.isElementVisibleByXpath(txtColumnName, "Block No");
    this.isElementVisibleByXpath(txtColumnName, "Block ID");
    this.isElementVisibleByXpath(txtColumnName, "Epoch/Slot");
    this.isElementVisibleByXpath(txtColumnName, "Transactions");
    this.isElementVisibleByXpath(txtColumnName, "Fees");
    this.isElementVisibleByXpath(txtColumnName, "Output");
    this.isElementVisibleByXpath(txtColumnName, "Created At");
    return this;
  }
  verifySortBtnEnable() {
    this.isControlEnabledByXpath(transactionBtn);
    this.isControlEnabledByXpath(createdAtBtn);
    return this;
  }
  verifyDesiredPageNumberMatchWithDataInList() {
    cy.xpath(numberBlockPerPage)
      .invoke("text")
      .then((text) => {
        cy.xpath(listBlock).should("have.length", text);
      });
    return this;
  }
}
