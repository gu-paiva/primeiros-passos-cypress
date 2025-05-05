import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage() 
    loginPage.loginwithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyinfo()

    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId','Drivers Number', '2026-05-01')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

    })

    it('login - Fail', () => {
      loginPage.accessLoginPage() 
      loginPage.loginwithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
     
      })
  })