import { NavLink } from "react-router-dom";
import React from "react";
import "./Navigation.css";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { useMediaQuery } from "react-responsive";

function Navigation({ pagetype }) {


    const isMobile = useMediaQuery({
        query: '(max-width: 770px)'
      })

    if (pagetype === "main") {
        return (
            <nav className="menu menu_type_main">
                <div className="menu__links">             
                    <NavLink exact to="/signup" className="link menu__item menu__item_type_main"
                        > Регистрация</NavLink>
                        <NavLink exact to="/signin" className="link menu__button-item menu__button-item_type_main"
                        > Войти</NavLink>
                </div>
            </nav>
        );
    };
    if (pagetype === "auth") {
        return (
            <nav className="menu menu_type_auth"></nav>
        );
    }

    return (
        <>{isMobile ? ( <MobileNavigation />) : (
        <nav className="menu">
                    <NavLink exact to="/movies" className="link menu__item" activeClassName="menu__item_active"
                        > Фильмы
                    </NavLink>
                    <NavLink exact to="/saved-movies" className="link menu__item" activeClassName="menu__item_active"
                        > Сохраненные фильмы
                    </NavLink>                
                <NavLink exact to="/profile" className="link menu__button-item"
                    > Аккаунт
                </NavLink>
        </nav>
        )}
        </>
    );
};

export default Navigation;


/*
       <>{isMobile ? (
            <MobileHeader />
          ) : (
            <Header
              loggedIn={loggedIn}
              pagetype={pagetype} />
          )}


         {isMobile ? (MobileNavigation />) :  } 
          */