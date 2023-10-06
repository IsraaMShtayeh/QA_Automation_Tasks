import addUser from "../../support/helper/signupHelper"

describe("Conduit Sign Up Account", () => {
  // beforeEach(function (){
  //     // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  //     // cy.fixture('login').as('data')
  // })

  it("Conduit: Create new account ", () => {
    addUser.conduitNewUserUsingAPI("israaa"+Math.random()*20, "israaa"+Math.random()*20+"@gmail.com", "123")
  })
  it("Conduit: Create new account ", () => {
    const apiPayload = {
      user: {
        username: "israaa"+Math.random()*20,
        email: "israaa"+Math.random()*20+"@gmail.com",
        password: "123"
      }
    }
    addUser.conduitNewUserUsingAPII(apiPayload).then((response) => {
      expect(response.status).to.equal(201);
    })
  })



  //
 
  
 
})