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
  isElementVisibleByXpath(locator, ...values) {
    let ele = format(locator, values);
    cy.xpath(ele).should("be.visible");
  }
  isControlEnabledByXpath(locator, ...values) {
    let ele = format(locator, values);
    cy.xpath(ele).should("be.disabled");
  }
}
