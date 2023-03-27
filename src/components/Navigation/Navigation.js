import { NavLink } from "react-router-dom";
import React from "react";
import "./Navigation.css";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { useMediaQuery } from "react-responsive";
import { FormattedMessage } from "react-intl";

function Navigation({ pagetype, loggedIn }) {

    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
    });
    
    if (pagetype === "auth") {
        return (
            <nav className="menu menu_type_auth"></nav>
        );
    };

    return (
        <>{loggedIn ? ( 
        <nav className={`menu menu_type_${pagetype}`}>
            {isMobile ? (<MobileNavigation
            pagetype={pagetype} />) : (
            <>  <NavLink exact to="/movies" className={`link menu__item menu__item_type_${pagetype}`} activeClassName="menu__item_active">
                    <FormattedMessage id="menu__movies" />
                </NavLink>
                <NavLink exact to="/saved-movies" className={`link menu__item menu__item_type_${pagetype}`} activeClassName="menu__item_active">
                    <FormattedMessage id="menu__saved_movies" />
                </NavLink>
                <NavLink exact to="/profile" className="link menu__button-item" activeClassName="menu__button-item_active">
                    <FormattedMessage id="menu__profile" />
                </NavLink>
                </>)}
                    </nav>
                ) : (
                    <nav className={`menu menu_type_${pagetype}`}>
                    <div className="menu__links">             
                    <NavLink exact to="/signup" className="link menu__item menu__item_type_main">
                        <FormattedMessage id="menu__register" />
                    </NavLink>
                    <NavLink exact to="/signin" className="link menu__button-item menu__button-item_type_main">
                        <FormattedMessage id="menu__login" />
                    </NavLink>
                </div>
                </nav>
                ) }
        </>
    );
};

export default Navigation;
