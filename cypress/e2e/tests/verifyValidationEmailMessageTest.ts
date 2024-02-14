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
        homePage.getInTouchHeaderButton().click();
        cy.log('User was clicked on "Get in touch" button');
        cy.url().should('eq', 'https://www.sapfioneer.com/contact/');
        cy.log('links are equals');
        cy.sendTextToIframeElement('hs-form-iframe-0','Work email').type('1234');
        cy.log('User send text to email input');
        cy.checkLabelAlert('hs-form-iframe-0','Email must be formatted correctly.');
        cy.log('Alert message was appear');
    })
})