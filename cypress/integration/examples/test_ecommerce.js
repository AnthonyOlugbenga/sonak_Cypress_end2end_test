
describe('Purchase to payment testing', function(){
    
    it('Add to Cart Test', function(){
        cy.visit('http://automationpractice.com/')
        cy.get('.ajax_add_to_cart_button').first().click() 
        cy.get('.cross').click()
        cy.wait(3000);
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.url().should('include', 'controller=order')

})
})
