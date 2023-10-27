export const  addEmployee=(firstName :string,middleName:string,lastName:string,id:string)=>{
    return cy.request({
        method: 'POST',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        body: {
            firstName: firstName,
            middleName: middleName,
            lastName:lastName,
            empPicture: null,
            employeeId: id
        }
    })
   
 
}

