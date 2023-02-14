import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ pagetype }) {

  const headerClassName = `header header_type_${ pagetype}`;

    return (
        <header className={headerClassName}>
            <div className={`header__logo header__logo_type_${pagetype}`}>
                <img className="logo" src={logo} alt="Логотип проекта" />
            </div>
            <Navigation
                pagetype={pagetype} />
        </header>
    );
};

export default Header;
