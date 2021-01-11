/// <reference types="cypress" />

describe('Amazon Search test', function(){
    it.skip('search test', function() {

        cy.visit('https://www.amazon.in/')
        cy.get('.nav-search-field').within(() =>{
            cy.get('#twotabsearchtextbox').type('Apple Mac Book Laptop')      // to avoid long, search parent then child

        })
    })
    it.skip('Back and forward test', function() {
        cy.visit('https://www.amazon.in/')
        cy.contains('Best Sellers').click()                                 // forward and backward

        cy.go('back')      //cy.go('-1') or forward=1
        cy.wait(300)
        cy.go('forward')
    
    })
    it.only('Reloading and Refreshing test', function() {
        cy.visit('https://www.amazon.in/')
        cy.contains('Best Sellers').click()                                // Reloading page

        cy.reload()
        cy.contains('Best Sellers').click()                                // Reloading page
        cy.contains('Best Sellers').should('be.visible')

        //cy.reload(true).contains('Best Sellers').should('be.visible')       force reload
    
    })
    


})