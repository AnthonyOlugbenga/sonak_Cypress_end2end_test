
import 'cypress-file-upload';

// -- Customize command --

Cypress.Commands.add("login_test", (email, password)=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name=txtUsername]').type(email)
    cy.get('input[name=txtPassword]').type(password)
    cy.get('input[name=Submit]').click()
    

 })

Cypress.Commands.add('search', (product)=> {
    cy.get('#search_query_top').type(product)
    cy.get('button[name="submit_search"]').click()
}) 
