import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ pagetype, loggedIn }) {

  const headerClassName = `header header_type_${ pagetype}`;
console.log(loggedIn)
    return (
        <header className={headerClassName}>
            <div className={`header__logo header__logo_type_${pagetype}`}>                 
                <Link to="/" className="link"><img className="logo" src={logo} alt="Логотип проекта" /></Link>
            </div>
            <Navigation
                pagetype={pagetype}
                loggedIn={loggedIn} />
        </header>
    );
};

export default Header;
