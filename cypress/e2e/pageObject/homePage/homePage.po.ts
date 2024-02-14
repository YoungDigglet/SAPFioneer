import {defineConfig} from "cypress";

export class HomePagePo {
    navigateTo() {
        cy.visit('https://www.sapfioneer.com/');
    }

    getInTouchHeaderButton(){
      return  cy.getElementByClass('header-nav > .html > .header-button > .button');
    }

    acceptCookieButton(){
        return cy.getElementByClass('flatsome-cookies__buttons > .primary');
    }
}