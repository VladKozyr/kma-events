import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

export default function(IfLoginComponent, IfNotLoginComponent){
    class LoginComponent extends React.Component{
        render(){
            if(!this.props.isLogin){
                return(
                    <IfNotLoginComponent {...this.props}/>
                )
            }
            return(
                <IfLoginComponent {...this.props}/>
            )
        }
    }

    LoginComponent.propTypes = {
        isLogin: PropTypes.bool.isRequired
    }

    function mapStateToProps(state){
        return{
            isLogin: state.login.value
        }
    }
    return connect(mapStateToProps)(LoginComponent)
}