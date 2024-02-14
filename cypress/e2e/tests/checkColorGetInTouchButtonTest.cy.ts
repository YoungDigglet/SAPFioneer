import {HomePagePo} from "../pageObject/homePage/homePage.po";

describe('Check the Get in touch button is yellow', () => {
    const homePage = new HomePagePo();
    before(() => {
        cy.clearCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        homePage.navigateTo();
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        homePage.acceptCookieButton().click();
    })


    it('check color button', () => {
        homePage.getInTouchHeaderButton().contains("span",'Get in touch');
        cy.log('Button contains text "Get in touch"');
        homePage.getInTouchHeaderButton().should('have.css','background-color','rgb(255, 212, 60)');
        cy.log('Background button is yellow');
    })
})