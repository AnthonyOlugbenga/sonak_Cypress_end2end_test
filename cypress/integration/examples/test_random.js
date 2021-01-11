/// <reference types="cypress" />


describe('verifying account creation functionality', function(){
    before( function(){
        cy.log(' ********** Tests have started ********** ')
    })

    beforeEach( function(){
         cy.visit('https://www.demoblaze.com/')
         cy.get('#signin2').click()
         cy.get('#signInModalLabel').contains('Sign up')       //verify sign up page
         cy.wait(2000)
 
         function generateNewUsername() {
             let text = "";
             let alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
             for(let i = 0; i < 10; i++)                      //function that generate random 
             text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
             return text; }
         const generatedUsername = generateNewUsername()
         cy.get('#sign-username').type(generatedUsername)
         cy.get('#sign-password').type('testing')
    })
    
    it('User can create a new account for ecommerce websites',function (){
        cy.get('#signInModal > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)')
        .contains('Sign up').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.')    })     ////verify alert message

    it('User can cancel creating new account on ecommerce websites',function (){
        cy.get('##signInModal > div > div > div.modal-footer > button.btn.btn-secondary').click()
        cy.get('#signInModalLabel').should(not.be.visible)
})

    })    
    })
