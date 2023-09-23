class PIM {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        switch: () => cy.get('.oxd-switch-input'),
        success: () => cy.get('.orangehrm-edit-employee-name > .oxd-text', { timeout: 30000 }),
        loader: () => cy.get('.oxd-loading-spinner', { timeout: 30000 }),
        calender: () => cy.get('.oxd-calendar-wrapper'),

        //info 
        dateOfBirth: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon'),
        nationality: () => cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        femal: () => cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'),
        male: () => cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'),
        save: () => cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'),


        jobTab: () => cy.get(':nth-child(6) > .orangehrm-tabs-item'),
        reportTab: () => cy.get(':nth-child(9) > .orangehrm-tabs-item'),
        dropDown: () => cy.get('.oxd-select-dropdown'),

        //user info
        empStatus: () => cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'),
        empSubunit: () => cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'),
        empJobTitle: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'),


        //super
        supervisor: () => cy.get(':nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button'),
        supervisorInput: () => cy.get('.oxd-autocomplete-text-input > input'),
        supervisorName: () => cy.get('.oxd-autocomplete-option'),
        reportingMethod: () => cy.get('.oxd-select-text--after > .oxd-icon'),
        direct: () => cy.get('.oxd-select-dropdown > :nth-child(2)'),
        indirect: () => cy.get('.oxd-select-dropdown > :nth-child(3)'),
        saveSuper: () => cy.get('.oxd-button--secondary'),

        // Search result 
        id: () => cy.get(':nth-child(2) > .oxd-input'),
        searchBtn: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),



        //search data
        search: {
            first_middle_name: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div'),
            last_name: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div'),
            job_title: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(5) > div'),
            emp_status: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(6) > div'),
            sub_unit: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(7) > div'),
            supervisor: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(8)'),

        }

    }

    addNewEmployee_API(firstName: string, middleName: string, lastName: string, id: String) {
        cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
            body: {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                empPicture: null,
                employeeId: id
            }
        })
            .then((response) => {
                expect(response).property('status').to.equal(200)
                const empNumber = response.body.data.empNumber;
                console.log(response.body.data.empNumber)
                cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/${empNumber}`)
                //success added
                this.elements.success().should('contain', firstName + " " + lastName);

            })
    }

    addNewSupervisor(firstName: string, middleName: string, lastName: string, id: String) {
        cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
            body: {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                empPicture: null,
                employeeId: id
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)
        })

    }



    addEmployeeInfo(user: any, supervisor: any) {
        //Nationality
        this.elements.nationality().click({ force: true });
        this.elements.dropDown().contains(user.nationality).click({ force: true });


        //Date Of Birth
        this.elements.dateOfBirth().click({ force: true });
        this.elements.calender().contains(user.dateOfBirth).click({ force: true });

        //Gender
        if (user.gender == "Femal") {
            this.elements.femal().click({ force: true })
        } else if (user.gender == "male") {
            this.elements.male().click({ force: true })
        }

        //save 
        this.elements.save().click({ force: true });




        this.elements.jobTab().click({ force: true });


        this.elements.loader().should('exist').then(() => {
            this.elements.loader().should('not.exist').then(() => {

                //Engineering
                this.elements.empSubunit().click({ force: true })
                this.elements.dropDown().contains(user.subUnit).click({ force: true })
                //Freelance
                this.elements.empStatus().click({ force: true })
                this.elements.dropDown().contains(user.empStatus).click({ force: true });

                //Assistant
                this.elements.empJobTitle().click({ force: true })
                this.elements.dropDown().contains(user.jobTitle).click({ force: true });
                this.elements.save().click({ force: true });

                //open new tab
                this.elements.reportTab().click({ force: true });



            })

        })

        //  supervisor was added  in (beforeEach) block 

        //Supervisor Name 
        this.elements.supervisor().click({ force: true })
        this.elements.supervisorInput().type(supervisor.firstName + ' ')
        this.elements.supervisorName().contains(supervisor.firstName).click({ force: true })

        //Reporting Method
        this.elements.reportingMethod().click({ force: true });
        if (user.reportingMethod == "Direct") {
            this.elements.direct().click({ force: true });
        } else if (user.reportingMethod == "Indirect") {
            this.elements.indirect().click({ force: true });
        }

        this.elements.saveSuper().click({ force: true })


        //search 
        this.elements.MainMenuItems().contains('PIM').click({ force: true });
        this.elements.id().type(user.id);
        this.elements.searchBtn().click({ force: true });
        this.elements.search.first_middle_name().should('contain', user.firstName + " " + user.middleName);
        this.elements.search.last_name().should('contain', user.lastName);
        this.elements.search.job_title().should('contain', user.jobTitle);
        this.elements.search.emp_status().should('contain', user.empStatus)
        this.elements.search.sub_unit().should('contain', user.subUnit)
        this.elements.search.supervisor().should('contain', supervisor.firstName)

    }



}
export default PIM;