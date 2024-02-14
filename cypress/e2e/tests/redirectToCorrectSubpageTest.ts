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
        cy.getElementFromHeader('Finance & ESG',' ESG KPI Engine ');
        cy.log('User was clicked on "ESG KPI Engine" label from "Finance & ESG" button');
        cy.url().should('eq', 'https://www.sapfioneer.com/finance-esg/esg-kpi-engine/');
        cy.log('links are equals');
    })
})