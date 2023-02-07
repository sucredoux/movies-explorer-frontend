import React from "react";
import logo from "../../images/logo.svg";
import { Link, Route, Switch } from "react-router-dom";
import "./Header.css";

function Header() {

    return (
        <header className="header header_type_main">
            <div className="header__logo">
                <img className="logo" src={logo} alt="Логотип проекта" />
            </div>
            <div className="header__auth-block">

            </div>
            <div className="header__switch">
            <Switch>
            <Route path="/" exact>
              <Link
                to="/signin"
                className="header__button"
              > Войти
              </Link>
              <Link 
                to='/signup'
                className="header__button"
              > Регистрация
              </Link>
            </Route>
            <Route path="/movies" >
              <Link to="/movies" className="header__button"
              > Фильмы
              </Link>
              <Link to="/saved-movies" className="header__button"
              > Сохраненные фильмы
              </Link>
              <Link to="profile" className="header__button"
              > Аккаунт
              </Link>
            </Route>
          </Switch>
            </div>

        </header>
    );
};

export default Header;
