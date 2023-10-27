 class CandidatePage {
    elements = {
        SchedualeInterviewBtn: () => cy.get('.oxd-button--success', { timeout: 30000 }),
        dateIcon: () => cy.get('.oxd-date-input .oxd-icon'),
        calender: () => cy.get('.oxd-calendar-wrapper').contains('Today'),
        interviewTitle: () => cy.get(' .oxd-input', { timeout: 30000 }).eq(5),
        hiringManager: () => cy.get('.oxd-autocomplete-text-input '),
        hiringManagerOptions: () => cy.get('.oxd-autocomplete-option').eq(1),
        saveBtn: () => cy.get('.oxd-button--secondary'),
        status: () => cy.get('.orangehrm-recruitment-status'),
    }
    schedualeInterview(){
      this.elements.SchedualeInterviewBtn().click({ force: true }).then(() => {
           this.elements.dateIcon().click({ force: true })
           this.elements.calender().contains('Today').click({ force: true })
         this.elements.interviewTitle().type("Interview1")
           this.elements.hiringManager().type("a")
           this.elements.hiringManagerOptions().click({ force: true })
          this.elements.saveBtn().click({ force: true })
        }).then(() => {
           this.elements.status().should('contain', 'Status: Interview Scheduled')
        })

    }
}
export default CandidatePage