import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    const location = useLocation();

    return (
        <Route>
            {props.loggedIn ? <Component { ...props} /> : <Redirect to={{pathname: "/", state: { from: location }}}/>}
        </Route>
    );
};

export default ProtectedRoute;
