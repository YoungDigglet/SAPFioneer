declare namespace Cypress {
    interface Chainable {
        getElementByDataAttribute(attribute: string, value: string): Chainable<JQuery<HTMLElement>>
        getElementByClass(className: string): Chainable<JQuery<HTMLElement>>
        getElementById(id: string): Chainable<JQuery<HTMLElement>>
        getElementByType(elementType: string): Chainable<JQuery<HTMLElement>>
        getElementFromHeader(elementName: string, subElementName: string): Chainable<JQuery<HTMLElement>>
        sendTextToIframeElement(iframeId: string, spanName: string): Chainable<JQuery<HTMLElement>>
        checkLabelAlert(iframeId1: string, spanName1: string): Chainable<JQuery<HTMLElement>>
    }
}

    Cypress.Commands.add("getElementByDataAttribute", (attribute,value) => {
        return cy.get(`[data-${attribute}="${value}"]`)
    })
    Cypress.Commands.add("getElementByClass", (className) => {
        return cy.get(`.${className}`)
    });
    Cypress.Commands.add("getElementById", (id) => {
        return cy.get(`#${id}`)
    })
    Cypress.Commands.add("getElementByType", (elementType) => {
    return cy.get(`elementType`)
    })
    Cypress.Commands.add("getElementFromHeader", (elementType, subElementName) => {
    cy.get('ul.header-nav').contains('a', `${elementType}`).click();
    cy.getElementByClass('sub-menu > .row > .col > .col-inner > .ux-menu > .ux-menu-link').contains('span', `${subElementName}`).click({force:true});
    })
    Cypress.Commands.add("sendTextToIframeElement", (iframeId,spanName) => {
        cy.wait(500);
        cy.getElementById(`${iframeId}`).then(($iframe) => {
            cy.wrap($iframe.contents().find('body').first()).contains('span', `${spanName}`).next();
        })
    })

        Cypress.Commands.add("checkLabelAlert", (iframeId1, spanName1) => {
            cy.wait(500);
            cy.getElementById(`${iframeId1}`).then(($iframe) => {
                cy.wrap($iframe.contents().find('body').first()).contains('label', `${spanName1}`);
            })
        })

