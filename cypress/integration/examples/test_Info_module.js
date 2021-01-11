/// <reference types="cypress" />

describe('myTestSuite_usingCommand', function(){

    before(function (){
        cy.log('.....upload data........')    })

    beforeEach(function () {
        cy.login_test('Admin','admin123')
        cy.title().should('be.equal', 'OrangeHRM') })

    it('MyInfo_module_test', function () {
        cy.get('#menu_pim_viewMyDetails > b').contains('My Info').click()              
        cy.get('input[id=btnSave]').click()
       

    it('Personal details: MyInfo Module', function () {
        cy.get('#personal_txtEmpMiddleName').should('be.enabled').type('John') //Input box
        cy.get('#personal_txtNICNo').should('be.visible').type('12345')
        cy.get('input[type=checkbox]').uncheck().should('not.be.checked')       //Check box
        cy.get('input[type=checkbox]').check().should('be.checked')
        cy.get('input[id=personal_optGender_2]').should('be.visible').check()    //Radio button
        cy.get('input[id=personal_optGender_1]').check().should('be.checked')
        cy.get('#personal_cmbNation').select('British').should('have.value', '27')
        cy.get('input[id=btnSave]').click()                             //drop down = select, options, get values

       
        }) 
    
    it('Emergency Contacts: MyInfo Module', function () {
            cy.get('#menu_pim_viewMyDetails > b').click()
            cy.get('#sidenav > li.selected > a').click()
            cy.get('#btnAddContact').click()
            cy.get('#emgcontacts_name').should('be.enabled').type('John')
            cy.get('#emgcontacts_relationship').should('be.visible').type('Married') 
            cy.get('#emgcontacts_mobilePhone').type('008475')
            cy.get('#btnSaveEContact').click()          
        })     

    })





    it('Dynamic logout test', function () {   
        cy.get('.panelTrigger').then(function($welcomeMsgElement){
            const welcomeText = $welcomeMsgElement.text()
            cy.log(welcomeText)
            expect(welcomeText).to.match(/Welcome .*/)      //handling dynamic element
            cy.contains(/Welcome .*/).click()               // verification
            cy.contains('Logout').click()
        })
    
    })
})