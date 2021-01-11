/// <reference types="cypress" />

describe('myTestSuite_usingfeature', function(){

    before(function(){
        cy.fixture('my_data').then(function(data){
         this.data=data     })                                                      
    })
   
   
    it('Login_with_feature', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name=txtUsername]').type(this.data.email)      
        cy.get('input[name=txtPassword]').type(this.data.password)   
        cy.get('input[name=Submit]').click()                         
        cy.title().should('be.equal', 'OrangeHRM')

        
    }) 
  
   
                
         
 })