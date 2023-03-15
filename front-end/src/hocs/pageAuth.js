import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function(WrappedComponent){
    class LoginComponent extends React.Component{
        render(){
            if(!this.props.isLogin){
                return(
                    <Navigate to="/" />
                )
            }
            return(
                <WrappedComponent {...this.props}/>
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