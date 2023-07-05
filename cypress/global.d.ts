/// <reference types="cypress" />

declare namespace Cypress {
  interface ResolvedConfigOptions {
    hideXHRInCommandLog?: boolean;
  }
}

declare namespace Cypress {
  interface Chainable {
    verifyElementDisplayed(locator: string, args?: any): Chainable<JQuery<HTMLElement>>;
    verifyElementNotDisplayed(locator: string, args?: any): Chainable<JQuery<HTMLElement>>;
  }
}

