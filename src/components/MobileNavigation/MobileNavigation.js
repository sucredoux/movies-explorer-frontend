import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavigation.css";

function MobileNavigation(props) {

    const[isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(true);
    };
    
    function handleClose() {
        setIsOpen(false);
    };

    return (
        <> <nav className="menu-mobile">
        <div className="menu-mobile__icon">
            {isOpen ? (
                <button
                    className="button menu-mobile__button menu-mobile__button_type_close"
                    onClick={handleClose}
                ></button>
            ) : (
                <button
                    className={`button menu-mobile__button menu-mobile__button_type_open menu-mobile__button_type_${props.pagetype}`}
                    onClick={handleOpen}
                ></button>
            )}
        </div>
       {isOpen ? (
        <div className="menu-mobile__window_opened">
            <div className="menu-mobile__menu">
                <div className="menu-mobile__list">
                    <NavLink exact to="/" className="link menu-mobile__item" activeClassName="menu-mobile__item_active"
                        > Главная
                    </NavLink>
                    <NavLink exact to="/movies" className="link menu-mobile__item" activeClassName="menu-mobile__item_active"
                        > Фильмы
                    </NavLink>
                    <NavLink exact to="/saved-movies" className="link menu-mobile__item" activeClassName="menu-mobile__item_active"
                        > Сохраненные фильмы
                    </NavLink>
                </div>
                <NavLink exact to="/profile" className="link menu-mobile__button-item" activeClassName="link menu-mobile__button-item_active"
                    > Аккаунт
                </NavLink>
            </div>

        </div>
        ) : (
        <div className="menu-mobile__window"></div>
        )}
        </nav></>
    );
};

export default MobileNavigation;
