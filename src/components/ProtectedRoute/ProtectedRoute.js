import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    const location = useLocation();
console.log(props.loggedIn);



    return (
        <Route>
            {props.loggedIn ? <Component { ...props} /> : <Redirect to={{pathname: "/", state: { from: location }}}/>}
        </Route>
    );
};

export default ProtectedRoute;
