class MyInfoPage {

    selectorsList() {
        const selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: "[placeholder='yyyy-dd-mm']",
        genericCombobox: ".oxd-select-text--arrow",
        secondItenCombobox: ":nth-child(27) > span",
        thirddItenCombobox: ":nth-child(3) > span",
        dateCLoseButton: ".--close",
        submitButton: ".orangehrm-left-space"
            
         }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().genericField).eq(6).clear().type("2026-05-01")
        cy.get(this.selectorsList().dateCLoseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItenCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirddItenCombobox).click()
    }

    }


export default MyInfoPage
