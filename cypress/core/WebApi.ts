var format = require("@stdlib/string-format");
export default class WebApi {
  openAnyUrl(url) {
    cy.visit(url);
  }
  getPageTitle() {
    return cy.title;
  }
  clickToElementByXpath(locator) {
    cy.xpath(locator).click();
  }
  clickToElement(locator) {
    cy.get(locator).click();
  }
<<<<<<< HEAD

  verifyElementAttribute(locator:string,attributeName:string){
    cy.get(locator).should('have.attr',attributeName);
  }

  verifyElementAttributeValue(locator:string,attributeName:string,attributeValue:string){
    cy.get(locator)
      .invoke('attr', attributeName)
      .should('eq', attributeValue);
  }

  verifyListElementAttribute(locatorOfListElement:string,attributeName:string){
    cy.get(locatorOfListElement).each(($element) => {
      // Perform assertions on each element
      cy.wrap($element).should('have.attr', attributeName);
    });
  }

  verifyNumberOfListElement(locatorOfListElement:string,numberOfElement:number){
    cy.get(locatorOfListElement).each(($element) => {
      cy.wrap($element).should('have.length', numberOfElement);
    });
=======
  isElementVisibleByXpath(locator, ...values) {
    let ele = format(locator, values);
    cy.xpath(ele).should("be.visible");
  }
  isControlEnabledByXpath(locator, ...values) {
    let ele = format(locator, values);
    cy.xpath(ele).should("be.disabled");
>>>>>>> aacc20fe0acc649d448f17b2185d223475372ac7
  }
}
