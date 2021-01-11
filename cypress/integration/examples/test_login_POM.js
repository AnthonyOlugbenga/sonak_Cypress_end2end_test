/// <reference types="cypress" />

import loginPage from '../Pages/login_page'


describe('Test Suite PageObject', function(){

    it('Valid Login Test', function () {

        const login = new loginPage()
        login.visit()
        login.enterUsername('Admin')
        login.enterPassword('admin123')
        login.submit()
        cy.title().should('be.equal', 'OrangeHRM')
        }) 
    
})