import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const authUser = JSON.parse(localStorage.getItem("authUser"))
const token = localStorage.getItem("token");
// console.log(authUser);

const Authmiddleware = ({
    component: Component,
    isAuthProtected,
    ...rest
    }) => (
    <Route
        {...rest}
        render={props => {
            
            if (isAuthProtected && !token && !localStorage.getItem("authUser")) {
                return (
                    <Redirect 
                        to={{pathname: "/signin", state: { from: props.location } }}
                    />
                )
            } else {
                return (
                    <Component {...props} />
                )
            }
            
        }}
    />
)

Authmiddleware.propTypes = {
    isAuthProtected: PropTypes.bool,
    component: PropTypes.any,
    location: PropTypes.object,
  }
  

export default Authmiddleware;