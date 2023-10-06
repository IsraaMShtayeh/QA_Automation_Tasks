describe("DOM Functionality", () => {
    beforeEach(function (){
    //   cy.visit("");
    //  cy.fixture('login').as('data')
   })
  
    it("Changing the DOM", () => {
      cy.visit("http://example.cypress.io/todo")
     // cy.get(".todo-button").eq(0).click({force:true})
      //or 
      // in the properties 
      //get this item and make it visible the click on it 
     // cy.get(".todo-button").eq(0).invoke('show').click()
     //hover on specific element 
      cy.contains('a','Active').trigger('mouseover')
    })
    //cookies 
    /*
    application ==> storage , cookies , cache
     sometimes when application launch ==> load data from database to the cache ==> to increse performane 
     unless if iam refresh the page of make edit on the Data base

     there is cache on back end and frontend 
     cypress have the possibilites to talk with everything in the browser 

     how to reach the cookies 
     Applications then cookies 
    */
   it.only('',()=>{
    cy.visit("https://example.cypress.io/commands/cookies")
    cy.getCookies().should('be.empty')
    cy.get('#getCookie .set-a-cookie').click()
    // we have only one cookies  
    //should('have.length',1) one or more it is true 
    cy.getCookies().should('have.length',1).should((cookies)=>{
        expect(1).to.be.equal  // should have only one cookies 
        expect(cookies[0]).to.have.property('name','token')
        expect(cookies[0]).to.have.property('value','123ABC')
    })
   })
})