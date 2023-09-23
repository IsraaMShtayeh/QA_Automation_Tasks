import LoginPage from "../support/pageobjects/Login";
import PIM from "../support/pageobjects/PIM"
const loginObj: LoginPage = new LoginPage();
const pimObject: PIM = new PIM();
describe('Login Home Page', () => {
  beforeEach(function () {
    cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('LoginPage')
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.fixture('employeeInfo').as('EmpInfo')
    loginObj.login('admin', "admin123")

    //Add new Supervisor 
    cy.get('@EmpInfo').then((infoData: any) => {
      pimObject.addNewSupervisor(infoData.user.supervisor.firstName, infoData.user.supervisor.middleName, infoData.user.supervisor.lastName, infoData.user.supervisor.id)
    });

    //Add new Employee via API
    cy.get('@EmpInfo').then((infoData: any) => {
      pimObject.addNewEmployee_API(infoData.user.firstName, infoData.user.middleName, infoData.user.lastName, infoData.user.id)
    });

  })



  it('Add Employee Info via UI ', () => {
    //@ for Alias 
    cy.get('@EmpInfo').then((infoData: any) => {
      pimObject.addEmployeeInfo(infoData.user, infoData.user.supervisor)
    })
  })


})

