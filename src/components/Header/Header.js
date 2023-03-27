import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { LOCALES } from "../../i18n/locales";

function Header({ pagetype, loggedIn, onSwitch, currentLocale }) {

  const headerClassName = `header header_type_${ pagetype}`;

  const languages = [
    { name: "RU", code: LOCALES.RUSSIAN },
    { name: "EN", code: LOCALES.ENGLISH },
    { name: "FR", code: LOCALES.FRENCH}
  ];

  function handleChange(e) {
    const { value } = e.target;
    onSwitch(value);
  }
  
    return (
        <header className={headerClassName}>
            <div className={`header__logo header__logo_type_${pagetype}`}>                 
                <Link to="/" className="link"><img className="logo" src={logo} alt="Логотип проекта" /></Link>
                <select className="header__switcher" onChange={handleChange} value={currentLocale}>
                    {languages.map(({ name, code }) => 
                    <option key={code} value={code}>
                        {name}
                    </option>)}
                </select>
            </div>
            <Navigation
                pagetype={pagetype}
                loggedIn={loggedIn} />
        </header>
    );
};

export default Header;
