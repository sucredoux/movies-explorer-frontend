import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer({ pagetype }) {

const footerClassName = `footer ${ pagetype === "auth" ? "footer_type_auth" : "" }`;

    return (
        <footer className={footerClassName}>
            <p className="footer__reference">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info-block">
                <p className="footer__data">&copy; 2020</p>
                <ul className="footer__contacts">
                    <Link to="https://practicum.yandex.ru/" className="footer__contact-link">Яндекс.Практикум</Link>
                    <Link to="https://github.com/" className="footer__contact-link">Github</Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
