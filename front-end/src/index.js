import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import configureStore from "./state/store";
import MenuComponentAuth from "./hocs/menuAuth"
import { MainPage, LogoutPage, UsersPage } from './pages/routedComponents';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TableComponent from './components/userTableComponent';
const { Header, Content, Footer } = Layout;
const {store, persistor} = configureStore()

export default function App(){
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout style={{minHeight: '100vh',}}>
            <MenuComponentAuth/>
            <Content style={{padding: '0 50px'}}>
              <div className="site-layout-content">
                <Routes>
                  <Route exact path='/' element={<MainPage/>}/>
                  <Route exact path="/logout" element={<LogoutPage/>} />
                  <Route path='/users' element={<UsersPage/>}/>
                </Routes>
              </div>
            </Content>
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
