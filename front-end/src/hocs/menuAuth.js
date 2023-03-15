import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import MenuComponen from "../components/menuComponent";
import {MenuFoldOutlined,LoginOutlined, LogoutOutlined, AppstoreOutlined,
    UnorderedListOutlined, ProfileOutlined,GiftOutlined, CreditCardOutlined,ShopOutlined,ContainerOutlined, DatabaseOutlined, UserOutlined, HistoryOutlined} from '@ant-design/icons';

let menuSetupNotAuth = [
    {
        image: <LoginOutlined />,
        name: "Авторизація",
        link: "/"
    }
]

let menuSetupAuth = [
    {
        image: <MenuFoldOutlined />,
        name: "Профіль",
        link: "/"
    },
    {
        image: <AppstoreOutlined />,
        name: "Користувачі",
        link: "/users"
    },
    {
        image: <AppstoreOutlined />,
        name: "Приміщення",
        link: "/rooms"
    },
    {
        image: <AppstoreOutlined />,
        name: "Запити",
        link: "/requests"
    },
    {
        image: <LogoutOutlined />,
        name: "Вийти",
        link: "/logout"
    }
]

class MenuComponenAuth extends React.Component{
    render(){
        if(!this.props.isLogin){
            return(
                <MenuComponen items={menuSetupNotAuth}  {...this.props}/>
            )
        }
        return(
            <MenuComponen items={menuSetupAuth} {...this.props}/>
        )
    }
}

MenuComponenAuth.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    selectedMenu: PropTypes.string.isRequired
}

function mapStateToProps(state){
    return{
        isLogin: state.login.value,
        selectedMenu: state.menu.value
    }
}

export default connect(mapStateToProps)(MenuComponenAuth)