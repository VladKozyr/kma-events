import requiredAuth from '../hocs/pageAuth'
import onLoginBetweenComponents from '../hocs/betweenComponentsOnLogin'
import { LoginForm } from '../components/loginFormComponent'
import { LogoutForm } from '../components/logoutFormComponent'
import { MainPage } from './mainPage'
import userRouted from './usersPage'

const LoginWithoutAuth = onLoginBetweenComponents(MainPage, LoginForm)
const UsersPageAuth = userRouted()
const LogoutFormWithAout = requiredAuth(LogoutForm)
// const StoragePage = requiredAuth(StoragePageComponent)

export {LoginWithoutAuth as MainPage, LogoutFormWithAout as LogoutPage, UsersPageAuth as UsersPage}
