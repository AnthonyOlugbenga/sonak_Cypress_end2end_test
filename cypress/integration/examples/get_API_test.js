
describe('Get API for Rest', function(){
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')

    it.skip('Get API test for flask - motorbike', function(){
        cy.request('GET','https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.product[0]).has.property('price', 599.99)    // url on postman then assert with status, price, product
            expect(res.body.product[0]).has.property('product', 'motorbike')
        })
    })

    it.skip('Get API test for flask - users', function(){
        cy.request('GET','https://flask-rest-api-demo.herokuapp.com/users').then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.users[0]).has.property('username', 'test_1')    // on postman then assert with status, user1, product
            expect(res.body.users[1]).has.property('id', 2)
            expect(res.body.users).has.length(5)                           // verification
            expect(res.body.users[0]).not.have.property('price')
        })
    })

    it.skip('Get API test for req res API- users', function(){
        cy.request('GET','https://reqres.in/api/users?page=2').then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.data[0]).has.property('first_name', 'Michael')    
            expect(res.body.data[1]).has.property('email', 'lindsay.ferguson@reqres.in')
            expect(res.body.data).has.length(6)                           
            
        })
    })
//      cy.request('POST','https://dummy.restapiexample.com/api/v1/create').then((response)=>{

    it('GET - read', function(){
        cy.request('/employees').then((response)=>{
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null   
            expect(response.body.data).to.have.length(24)
        })
    })

    it('POST - create', function(){
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','/create', item)
    })
    
})