/// <reference types="cypress" />

describe('Orange HRM testing with select tag', function(){
    it.skip('Dropdown testing', function () {
        
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Contact').type('012345')

        cy.get('#Form_submitForm_Country')    // drop down 
        .select('Andorra').should('have.value', 'Andorra')

        cy.get('#Form_submitForm_Industry').select('Retail / Wholesale')
        cy.get('#Form_submitForm_NoOfEmployees').select('16 - 20') })  
})

    it.skip('Click on Sign Up Link Test', function () {
        
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
})

    it.skip('Click on Member Login Link Test', function () {
        
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login')                          //little issue
})
    it.skip('Snapdeal Page - filter checkbox test', function () {
        it('Add to Cart Test', function(){
            cy.get('.ajax_add_to_cart_button').first().click() 
            cy.get('.cross').click()
            cy.wait(3000);
            cy.get('.cart_block').should('be.hidden').invoke('show')
            cy.get('#button_order_cart').click()
            cy.url().should('include', 'controller=order')
    
    })

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
        
          //cy.get('css1').click('')               multiple select
         //cy.get('css').contains('English').click()
         //cy.get('css').contains('Lanteen').click()

         //cy.get('css1').click()
         //cy.get('css').type('Ind')      searchable drop down
         //cy.get('css').type('{enter}') 
    })
    

 
    })
  

