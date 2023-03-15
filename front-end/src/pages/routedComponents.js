import requiredAuth from '../hocs/pageAuth'
import onLoginBetweenComponents from '../hocs/betweenComponentsOnLogin'
import { LoginForm } from '../components/loginFormComponent'
import { LogoutForm } from '../components/logoutFormComponent'
import { MainPage } from './mainPage'

const LoginWithoutAuth = onLoginBetweenComponents(MainPage, LoginForm)
const LogoutFormWithAout = requiredAuth(LogoutForm)
// const StoragePage = requiredAuth(StoragePageComponent)

export {LoginWithoutAuth as MainPage, LogoutFormWithAout as LogoutPage}
