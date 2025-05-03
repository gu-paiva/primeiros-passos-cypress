import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    // sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    // dashboardGrid: ".orangehrm-dashboard-grid",
    // myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]', 
    firtNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItenCombobox: ":nth-child(27) > span",
    thirddItenCombobox: ":nth-child(3) > span",
    dateCLoseButton: ".--close",
    submitButton: ".orangehrm-left-space"
    
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage() 
    loginPage.loginwithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyinfo()


    // cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    // cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    // cy.get(selectorsList.loginButton).click()
    // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // cy.get(selectorsList.dashboardGrid)
    // cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firtNameField).clear().type('FirstNameTeste')
    cy.get(selectorsList.lastNameField).clear().type('LastNemeTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdtest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers License Numbe test')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-05-01')
    cy.get(selectorsList.dateCLoseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItenCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirddItenCombobox).click()
    
    })

    it('login - Fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      })
  })