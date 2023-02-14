import { NavLink } from "react-router-dom";
import React from "react";
import "./Navigation.css";

function Navigation({ pagetype }) {

    if (pagetype === "main") {
        return (
            <nav className="menu menu_type_main">
                <div className="menu__links">             
                    <NavLink exact to="/signup" className="link menu__item menu__item_type_main"
                        > Регистрация</NavLink>
                        <NavLink exact to="/signin" className="link menu__button menu__button_type_main"
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
        <nav className="menu">
                    <NavLink exact to="/movies" className="link menu__item" activeClassName="menu__item_active"
                        > Фильмы
                    </NavLink>
                    <NavLink exact to="/saved-movies" className="link menu__item" activeClassName="menu__item_active"
                        > Сохраненные фильмы
                    </NavLink>                
                <NavLink exact to="/profile" className="link menu__button"
                    > Аккаунт
                </NavLink>
        </nav>
    );
};

export default Navigation;