import UserTableComponent from "../components/userTableComponent"
import { Button, Space } from 'antd';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import React from "react";
import UserViewComponent from "../components/userViewComponent";

export default function(){
    class UserPageComponent extends React.Component{
        
        render(){
            if(this.props.toView){
                return(<UserViewComponent {...this.props}/>)
            }
            return(
                <UserTableComponent/>
            )
        }
    }

    UserPageComponent.propTypes = {
        toView: PropTypes.bool.isRequired
    }

    function mapStateToProps(state){
        return{
            toView: state.user.toView,
            selectedUser: state.user.selectedUser
        }
    }
    return connect(mapStateToProps)(UserPageComponent)
}
