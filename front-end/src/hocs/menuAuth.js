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
        name: "Login",
        link: "/"
    }
]

let menuSetupAuth = [
    {
        image: <MenuFoldOutlined />,
        name: "General",
        link: "/"
    },
    {
        image: <AppstoreOutlined />,
        name: "Storages",
        link: "/storages"
    },
    {
        image: <UnorderedListOutlined />,
        name: "Categories",
        link: "/categories"
    },
    {
        image: <ProfileOutlined />,
        name: "Products",
        link: "/products"
    },
    {
        image: <ContainerOutlined />,
        name: "Tech card categories",
        link: "/techcard/categories"
    },
    {
        image: <DatabaseOutlined />,
        name: "Tech cards",
        link: "/techcard"
    },
    {
        image: <ShopOutlined />,
        name: "Providers",
        link: "/providers"
    },
    {
        image: <HistoryOutlined />,
        name: "Storage operations",
        link: "/storages/operations"
    },
    {
        image: <UserOutlined />,
        name: "Clients",
        link: "/clients"
    },
    {
        image: <CreditCardOutlined />,
        name: "Discounts",
        link: "/discounts"
    },
    {
        image: <GiftOutlined />,
        name: "Orders",
        link: "/orders"
    },
    {
        image: <LogoutOutlined />,
        name: "Logout",
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