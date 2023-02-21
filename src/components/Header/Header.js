import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ pagetype }) {

  const headerClassName = `header header_type_${ pagetype}`;

    return (
        <header className={headerClassName}>
            <div className={`header__logo header__logo_type_${pagetype}`}>
                 
                <Link exact to="/" className="link menu__item menu__item_type_main"
                ><img className="logo" src={logo} alt="Логотип проекта" /></Link>

            </div>
            <Navigation
                pagetype={pagetype} />
        </header>
    );
};

export default Header;
