/// <reference types="cypress" />

class loginPage{

visit(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
      
}

enterUsername(value){
const textfield=cy.get('input[name=txtUsername]')
textfield.clear()
textfield.type(value)
return this
}

enterPassword(value){
const textfield=cy.get('input[name=txtPassword]')
textfield.clear()
textfield.type(value)
return this   
}

submit(){
const button=cy.get('input[name=Submit]')
button.click()
}
}

export default loginPage

