import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    const history = useHistory();
console.log(history);
console.log(props.pagetype === "auth");
/*
useEffect(()=> {
    if (!props.loggedIn) {
        console.log("I am false");
        console.log(history.location.pathname);
        history.push("/")
    } else {
        console.log("I am true");
        return history.push(history.location.pathname) 
    }
}, [props.loggedIn]);

*/

/*
useEffect(() => {
    if (props.loggedIn && props.pagetype === "auth") {
        const { pathname } = history.location || { pathname: '/'};
            history.push(pathname);
            console.log(pathname);
        };
}, [props.loggedIn]);


    if (!props.loggedIn) {
        console.log("I am false");
        console.log(history.location.pathname);
        history.push("/")
    }
   /* if (props.loggedIn && props.pagetype !== "auth") {
        const { pathname } = history.location;
        history.push(pathname);
    };*/
console.log(props.loggedIn);
    return (
        <Component {...props} />

    );
};

export default ProtectedRoute;


/*
 return (
        <Route>
            {props.loggedIn ? <Component { ...props} /> : <Redirect to="/" />}
        </Route>
    );

 /*  if (props.loggedIn && props.pagetype === "auth") {
   /* const { pathname } = history.location;*/
  /*      history.push("/");
    };

    if (!props.loggedIn) {
        history.push("/")
    }*/
   /* if (props.loggedIn && props.pagetype !== "auth") {
        const { pathname } = history.location;
        history.push(pathname);
    };*/



/*

    const location = useLocation();

    console.log(location);
    console.log(props.pagetype === "auth");

    if (loggedIn && props.pagetype === "auth") {
        const { from } = location.state || { pathname: '/'}
        return <Navigate to={from} />
    }

    if (!loggedIn) {

        return <Navigate to="/signin"  />
    }


    return (
        <Component {...props} />
        
    );
};

*/