
describe('Testing automation practice website', function(){

    before(function (){

        cy.visit('http://automationpractice.com/')
        cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
        cy.get('#email').type('tony190uk@yahoo.com')
        cy.get('#passwd').type('testing')
        cy.get('#SubmitLogin').click() 
    })

    it('User can login', function(){
        cy.url().should('include', 'controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length', 5)   
    })

    it('User Can Navigate to Home Page', function() {
        cy.get('.icon-chevron-left').last().click().url()
        .should('include', 'index.php')
    })

    it('User Can search for product', function() {
        cy.search('Dress')
        cy.get('#center_column > h1 > span.lighter').should('contain.text', 'Dress')

    })
    it('Uploading file to the website', function () {
        cy.get('#contact-link > a').click()
        const yourFixturePath = 'upload.json';
        cy.get('#fileUpload').attachFile(yourFixturePath);
})
 
    it('Dropdown testing', function () {
        cy.get('.sf-with-ul').first().click()
        // checkbox the checkboxes and verify them
        cy.get('.checkbox').check().parent().should('have.class','checked')
        // uncheck the checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked')
})
 
    it('search testing', function () {
            
        cy.visit('http://automationpractice.com/index.php')      //12 mouse over
        cy.get('#search_query_top').type('dress')
        cy.get('.ac_results')
        .contains('T-shirts').click()
    })

   
})