/// <reference types="cypress" />


describe('file upload use case', function(){

    it('Uploading file to the website', function () {
        cy.visit('http://automationpractice.com/index.php?controller=contact')

        const yourFixturePath = 'upload.json';
        cy.get('#fileUpload').attachFile(yourFixturePath);
    })

    it.skip('Drag and Drop Upload', function () {
        cy.visit('http://css-tricks.com/examples/DragAndDropFileUploading/')

        const yourFixturePath = 'upload.json';
        cy.get('#file').attachFile(yourFixturePath);
        cy.get('.box__success').should('contain.text','Done!')
    })

    it.skip('Multiple files Upload', function () {
        cy.visit('http://davidwalsh.name/demo/multiple-file-upload.php/')

        const yourFixturePath = 'upload.json';
        const yourFixturePath1 = 'upload.txt';       //.jpeg   .png
    
        cy.get('#filesToUpload')
        .attachFile(yourFixturePath)
        .attachFile(yourFixturePath1)
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected')
    })

    it.skip('Multiple files Upload', function () {
        cy.visit('http://davidwalsh.name/demo/multiple-file-upload.php/')

        const yourFixturePath = 'upload.json';   //.jpeg   .png
        cy.get('#filesToUpload').attachFile({filePath: yourFixturePath, fileName: 'users.json'})
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected')
    })

    it('Another method', function(){
       
         
    })

})



         
        