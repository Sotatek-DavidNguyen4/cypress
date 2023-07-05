import WebApi from "../core/WebApi"

const blockchainDropdownList = "//span[text()='Blockchain']/..";
const epochPanel = "//span[text()='Epochs']/..";
const epochNumber = "tr[class] > td>a";
const dataInEpochTable = "tr[class]";
const pagingNavigator = "nav[aria-label]";
const textboxInputPage = "nav[aria-label] input";
const latestEpochNumber = "div[class='MuiBox-root css-h1m9wf']";
const footer = "footer[data-testid]";
export default class EpochPanel extends WebApi{
  
  constructor(){
    super();
  }

  goToHomePage() {  
    this.openAnyUrl("/")
    return this;
  }

  clickOnBlockChainDropDownList() {
    this.clickToElementByXpath(blockchainDropdownList);
    return this;
  }

  clickOnEpochPanel() {
    this.clickToElementByXpath(epochPanel);
    return this;
  }

  verifyPagingNavigatorDisplay(){
    let totalRecord :number;
    cy.get(latestEpochNumber)
      .invoke('text')
      .then((text) => {
        totalRecord = parseInt(text) +1; 
        if(totalRecord>10){
          cy.get(footer).scrollIntoView();
          cy.verifyElementDisplayed(pagingNavigator);
        }else{
          cy.verifyElementNotDisplayed(pagingNavigator);
        }
       });

  return this;
  }

  verifyEpochNumberIsHyperLink(){
    this.verifyListElementAttribute(epochNumber,'href');
    return this;
  }

  verifyOrtherFieldIsTextLabel(){
    for (let i = 0; i < 49; i++) {
      cy.get(dataInEpochTable)
        .eq(i)
        .find('td>span')
        .each(($element) => {
          cy.wrap($element).should(($el) => {
            expect($el.text().trim()).not.to.be.empty;
          });
        });
    }

  return this;
  }

  verifyDefaultInputPage(defaultPage:string){
    this.verifyElementAttributeValue(textboxInputPage,'value',defaultPage)
    return this;
  }
}
