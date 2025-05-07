import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {


    it('login - Fail', () => {
      loginPage.accessLoginPage() 
      loginPage.loginwithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
     
      })

      it('login - Success', () => {
        loginPage.accessLoginPage() 
        loginPage.loginwithUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
        
  })

})