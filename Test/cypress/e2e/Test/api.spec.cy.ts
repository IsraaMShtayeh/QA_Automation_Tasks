import LoginValidation from "../../support/pageobjects/loginValidation";
const loginObjValidation: LoginValidation = new LoginValidation();

//get(without body)  post(with body) put(with body)  delete(with or without body)
//https secure call btw  server and app certificate 
//Web services : allows multiple application (different languages) to communicate with each other. 
//authentication vs permission : everyone have permission must have authentication 
//post login 
//payload ==> body json or xml 
//headers content type for security 
// 400 bad request missing info 
//404 not found
//header include authentication
//403 forbidden
//response api with success msg
//api testing or integration testing not e2e testing 
//search e.g. 
//load testing ==> performane testing , stress testing 
//cllient side on your pc but backend on one server so bottleneck performance usually on backend 
//security testing using api 
//penetration testing part of security teting 
//API Elements 
//Navigation:URL 
//URL Contain version e.g. v1
// empty body : client side error ( ما لحق يوصل للداتا بيس )
//forbidden unauthorized 
// not found path of the URL 

//500 server down 
//503 server down , no resp from server ,  service unavai;able 
// 504 unstable server gateway unavailable 
//502 bad gateway related to network 

// host fixed in URL 
// query parameter == filters 

//api have specific size  it can be compressied .
//We focus on response time , errors , network rcv and send in api .

// correct situaion production env the same as testing env 


describe("Login Home Page", () => {
    beforeEach(function () {
        //prerequisite here 
        // API faster and kill bugs before become problems and allow dev to start test early 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('login').as('data')

        cy.get('@data').then((infoData: any) => {
            loginObjValidation.fillData(infoData.valid.name, infoData.valid.password)
            loginObjValidation.checkPage(infoData.valid.message)
        })
        //Name of the function should be complete
        //return  cy.contains("p", "Quick Launch").parents() if you want to split this into  another function 
        //<div parent2> <div parent1> <div parent0> <p> Quick Launch   </p>
        // cy.contains("p", "Quick Launch").parents().eq(2).then((e) => {
        //     console.log(e);
        // })


    })
//
  it("",function(){
    cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget'). 
    get('.orangehrm-attendance-card'). 
    get('.orangehrm-attendance-card-bar').should('contain', 'Today') 
    .then(item=>console.log(item))
  })
  it("",function(){
    cy.contains("p", "Time at Work") 
    .parents().eq(2) 
   .contains("0h 0m Today") 
    .then(a => { 
        console.log(a) 
    })
  })
  
});