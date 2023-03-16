import requiredAuth from "../hocs/pageAuth";
import onLoginBetweenComponents from "../hocs/betweenComponentsOnLogin";
import { LoginForm } from "../components/loginFormComponent";
import placePage from "../hocs/placePage";
import { LogoutForm } from "../components/logoutFormComponent";
import { MainPage } from "./mainPage";
import userRouted from "../hocs/usersPage";

const LoginWithoutAuth = onLoginBetweenComponents(MainPage, LoginForm);
const UsersPageAuth = userRouted();
const Place = placePage();
const LogoutFormWithAout = requiredAuth(LogoutForm);
// const StoragePage = requiredAuth(StoragePageComponent)

export {
  LoginWithoutAuth as MainPage,
  LogoutFormWithAout as LogoutPage,
  UsersPageAuth as UsersPage,
  Place as PlacePage,
};
